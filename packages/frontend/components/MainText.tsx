import { Flex, HStack, Heading, Text, VStack, SlideFade } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

const MainText = (): JSX.Element => {
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
			justifyContent="center"
			align="center"
			direction="column"
		>
			<VStack m="40px" maxW="60%" textAlign="center" gap="24px">
				<SlideFade in={inView} offsetY={30} delay={0.5}>
					<HStack ref={stackRef}>
						<Heading fontSize="heading" marginRight="0.75rem">What Does it </Heading>
						<Heading 
							fontSize="heading"
							bg="linear-gradient(180deg, #FF7847 0%, #FF479E 100%)"
							backgroundClip="text"
						>
								Do
						</Heading>
						<Heading fontSize="heading">?</Heading>
					</HStack>
				</SlideFade>
				<SlideFade in={inView} offsetY={30} delay={0.75}>
					<Text
						fontSize="regular"
						color="text"
						zIndex="10"
					>
						This bad boy can fit so many face landmarks so that you can move freely with less clicks.
						Scroll with your nose; move with your eyes. Procrastinate like never before!
					</Text>
				</SlideFade>
			</VStack>
		</Flex>
	);
};
export default MainText;
