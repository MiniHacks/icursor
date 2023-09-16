import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const HeroText = (): JSX.Element => (
	<Flex 
		flex="1" 
		direction="column"
		gap="1rem"
	>
		<Heading fontSize="heading">Tagline here</Heading>
		<Text 
			fontSize="regular"
			color="text"
		>
			Insert an interesting description here. 
			Look where you think, and act where you look. 
			Vim for your eyes.
		</Text>
		<Button
			bg="button"
			fontSize="regular"
			letterSpacing="2px"
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
