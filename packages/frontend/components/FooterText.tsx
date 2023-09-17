import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const FooterText = (): JSX.Element => (
	<Flex
		direction="column"
		zIndex={1}
	>
		<HStack marginBottom="24px">
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
			By sacrificing our souls to the gods of developing PhD projects and to
			the rock of fine-tuning.
		</Text>
		<Text>
			(Mediapipe + WebGrazer + Saliency = yay?)
		</Text>
		</VStack>
	</Flex>
);
export default FooterText;
