import { Flex, HStack, Heading, Text, VStack, SlideFade, useDisclosure } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

const MainText = (): JSX.Element => {
  // State to track whether the element is in view
  const [inView, setInView] = useState(false);
  
  // Ref for the element we want to observe
  const boxRef = useRef<HTMLDivElement | null>(null); // Specify the type

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // When 50% of the element is visible
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Stop observing once it's in view
          if (boxRef.current) {
            observer.unobserve(boxRef.current);
          }
        }
      });
    }, options);

    // Start observing the element
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    // Clean up the observer when the component unmounts
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
			<VStack m="40px" maxW="60%" textAlign="center">
				<SlideFade in={inView} offsetY={30} delay={0.5}>
					<HStack ref={boxRef}>
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
					>
						Insert an interesting description here. 
						We do so many cool things. This is a description. This is a description.
					</Text>
				</SlideFade>
			</VStack>
		</Flex>
	);
};
export default MainText;
