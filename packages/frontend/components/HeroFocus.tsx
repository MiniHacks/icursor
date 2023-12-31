import { Flex, Circle, Heading } from "@chakra-ui/react";
import Bubble from "./Bubble";

const HeroFocus = (): JSX.Element => (
	<Flex 
		flex="1" 
		direction="column"
		gap="2rem"
		zIndex={1}
	>
		<Flex justifyContent="flex-start">
			<Bubble p="64px" identifier="🕊️" tooltip="" />
		</Flex>
		<Flex justifyContent="flex-end" marginRight="0rem">
			<Bubble identifier="🐓" tooltip="" />
		</Flex>
		<Flex justifyContent="center">
			<Bubble identifier="🦆" tooltip="" />
		</Flex>
	</Flex>
);
export default HeroFocus;
