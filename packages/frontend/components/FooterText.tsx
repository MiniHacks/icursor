import { Flex, HStack, Heading, Text } from "@chakra-ui/react";

const FooterText = (): JSX.Element => (
	<Flex
		direction="column"
	>
		<HStack>
			<Heading fontSize="heading" marginRight="0.75rem">How Does it</Heading>
			<Heading 
				fontSize="heading"
				background="linear-gradient(180deg, #FF7847 0%, #FF479E 100%)"
				backgroundClip="text"
			>
					Work
			</Heading>
			<Heading fontSize="heading">?</Heading>
		</HStack>
		<Text
			fontSize="regular"
			color="text"
		>
			Insert an interesting description here. Eye tracker model go brrrr.
		</Text>
	</Flex>
);
export default FooterText;
