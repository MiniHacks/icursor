import { Flex, HStack, Heading, Text, VStack, SlideFade } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

const FooterText = (): JSX.Element => {
	const [inView, setInView] = useState(false);
  const stackRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);

          if (stackRef.current) {
            observer.unobserve(stackRef.current);
          }
        }
      });
    }, options);

    if (stackRef.current) {
      observer.observe(stackRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


	return (
		<Flex
			direction="column"
			zIndex={1}
		>
			<SlideFade in={inView} offsetY={30} delay={0.5}>
				<HStack ref={stackRef} marginBottom="24px">
						<Heading fontSize="heading" marginRight="0.75rem">How Does it</Heading>
						<Heading 
							fontSize="heading"
							bg="linear-gradient(180deg, #FF7847 0%, #FF479E 100%)"
							backgroundClip="text"
						>
								Work
						</Heading>
						<Heading fontSize="heading">?</Heading>
				</HStack>
			</SlideFade>
			<SlideFade in={inView} offsetY={30} delay={0.75}>
				<VStack fontSize="regular"
					color="text" alignItems="start">
						<Text>
							Taking laptop webcam footage, we map where a user is
							looking to their mouse using gaze prediction.
						</Text>
						<Text>
							(Mediapipe + Transalnet + WebGazer = yay?)
						</Text>
				</VStack>
			</SlideFade>
		</Flex>
	);
}
export default FooterText;
