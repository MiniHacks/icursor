import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const FooterText = (): JSX.Element => (
	<Flex
		direction="column"
		zIndex={1}
	>
		<HStack marginBottom="0.75rem">
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
		<VStack fontSize="regular"
			color="text" alignItems="start">
		<Text>
			Insert an interesting description here. Eye tracker model go brrrr.
		</Text>
		<Text>
			Mediapipe + ??? = high latency profits for high quality guys
		</Text>
		</VStack>
	</Flex>
);
export default FooterText;
