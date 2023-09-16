import { Circle, Heading } from "@chakra-ui/react";

type BubbleProps = {
	identifier: string;
	tooltip: string;
	[key: string]: any;
}

const Bubble = ({ identifier, tooltop, ...props }: BubbleProps): JSX.Element => (
	<Circle 
		transition='ease 0.5s'
		cursor="pointer"
		size="100px" 
		bg='background' 
		color='white'
		border='2px solid white'
		_hover={{
			bg: "white",
			color: "button",
		}}
		{...props}
	>
		<Heading fontSize="3rem">{identifier}</Heading>
	</Circle>
);
export default Bubble;
