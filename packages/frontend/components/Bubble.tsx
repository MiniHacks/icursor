import { Circle, Heading } from "@chakra-ui/react";

type BubbleProps = {
	identifier: string;
	tooltip: string;
	[key: string]: any;
}

const Bubble = ({ identifier, tooltop, ...props }: BubbleProps): JSX.Element => (
	<Circle 
		size="150px" 
		bg='background' 
		color='white'
		border='2px solid white'
		{...props}
	>
		<Heading fontSize="3rem">{identifier}</Heading>
	</Circle>
);
export default Bubble;
