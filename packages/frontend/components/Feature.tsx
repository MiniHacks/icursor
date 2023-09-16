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
		bg="#131314"
		borderRadius="8px"
		padding="4rem 3rem"
		gap="1rem"
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
