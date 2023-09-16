import { Flex, Circle, Heading } from "@chakra-ui/react";
import Bubble from "./Bubble";

const HeroFocus = (): JSX.Element => (
	<Flex 
		flex="1" 
		direction="column"
		gap="2rem"
		margin="0rem"
	>
		<Flex justifyContent="flex-start">
			<Bubble identifier="1" tooltip="" />
		</Flex>
		<Flex justifyContent="flex-end" marginRight="5rem">
			<Bubble identifier="1" tooltip="" />
		</Flex>
		<Flex justifyContent="flex-start">
			<Bubble identifier="1" tooltip="" />
		</Flex>
	</Flex>
);
export default HeroFocus;
