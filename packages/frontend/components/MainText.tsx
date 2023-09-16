import { Flex, HStack, Heading, Text } from "@chakra-ui/react";

const MainText = (): JSX.Element => (
	<Flex 
		justifyContent="center"
		align="center"
		direction="column"
	>
		<HStack>
			<Heading fontSize="heading" marginRight="0.75rem">What Does it </Heading>
			<Heading 
				fontSize="heading"
				background="linear-gradient(180deg, #FF7847 0%, #FF479E 100%)"
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
			Insert an interesting description here. 
			We do so many cool things or whatever.
		</Text>
	</Flex>
);
export default MainText;
