import { Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

const HeroText = (): JSX.Element => (
	<Flex 
		direction="column"
		marginRight="10rem"
		maxWidth="40vw"
		gap="32px"
	>
		<Heading fontSize="72px" lineHeight="90%"> Vim for Your Eyes</Heading>
		<Text 
			fontSize="regular"
			color="text"
		>
			Chrome extension for gaze prediction with saliency mappings. 
			Look where you think; act where you look. 
			Move with just a glance and a webcam.
		</Text>
		
		<HStack w="fit-content" zIndex="10">
			<Button
				bg="button"
				fontSize="18px"
				bgGradient="linear(to-r, #FF7847, #FF479E)"
				color="white"
				padding="1rem"
				marginRight="12px"
				width="fit-content"
				_hover={{
					bg: "white",
					color: "button"
				}}
			>
				Download
			</Button>
			<Button
				bg="button"
				fontSize="18px"
				variant="outline"
				bg="backgroundLighter"
				color="#FF7847"
				padding="1rem"
				borderColor="#37363A"
				width="fit-content"
				_hover={{
					bg: "orange",
					color: "white",
					borderColor: "white",
				}}
			>
				Github
			</Button>
		</HStack>
		
	</Flex>
);
export default HeroText;
