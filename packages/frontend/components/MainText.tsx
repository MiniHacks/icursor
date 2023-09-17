import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const MainText = (): JSX.Element => (
	<Flex 
		justifyContent="center"
		align="center"
		direction="column"
	>
		<VStack m="40px" maxW="60%" textAlign="center" gap="24px">
		<HStack>
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
		<Text
			fontSize="regular"
			color="text"
		>
			This bad boy can fit so many face landmarks so that you can move freely with less clicks.
			Scroll with your nose; move with your eyes. Procrastinate like never before!
		</Text>
		</VStack>
	</Flex>
);
export default MainText;
