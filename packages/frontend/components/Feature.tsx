import { Flex, Image, Text } from "@chakra-ui/react";

type FeatureProps = {
	image: string;
	title: string;
};

const Feature = ({ image, title }: FeatureProps): JSX.Element => (
	<Flex 
		flex="1"
		direction="column"
		justify="center"
		align="center"
		border="2px solid rgba(255, 255, 255, 0.40)"
		borderRadius="16px"
		bg="rgba(47, 47, 51, 0.2)"
		backdropBlur="10px"
		boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
		opacity="0.8"
		padding="4rem 3rem"
		gap="64px"
		transition="ease 0.5s"
		_hover={{
			background: "rgba(47, 47, 51, 0.5)",
			color: "button",
		}}
	>
		<Image
			src={image}
			boxSize="200px"
		/>
		<Text 
			fontSize="regular"
		>
			{title}
		</Text>
	</Flex>
);
export default Feature;
