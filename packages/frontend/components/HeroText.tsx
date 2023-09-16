import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const HeroText = (): JSX.Element => (
	<Flex 
		direction="column"
		gap="1rem"
		marginRight="10rem"
		maxWidth="50vw"
	>
		<Heading fontSize="80px">Tagline here.</Heading>
		<Text 
			fontSize="regular"
			color="text"
			mb="16px"
		>
			Insert an interesting description here. 
			Look where you think, and act where you look. 
			Vim for your eyes.
		</Text>
		<Button
			bg="button"
			fontSize="regular"
			color="white"
			padding="2rem"
			width="fit-content"
			_hover={{
				bg: "white",
				color: "button"
			}}
		>
			Download
		</Button>
	</Flex>
);
export default HeroText;
