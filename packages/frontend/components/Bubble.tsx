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
		color='white'
		border="2px solid rgba(255, 255, 255, 0.40)"
		borderRadius="16px"
		bg="rgba(47, 47, 51, 0.2)"
		backdropBlur="10px"
		boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
		opacity="0.8"
		_hover={{
			background: "rgba(47, 47, 51, 0.5)",
			color: "button",
			rotate: "-10deg",
			translateX: 0,
			scale: 0.96,
		}}
		{...props}
	>
		<Heading fontSize="3rem">{identifier}</Heading>
	</Circle>
);
export default Bubble;
