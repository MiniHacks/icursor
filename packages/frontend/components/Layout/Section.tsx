import { Flex } from "@chakra-ui/react";
import { MutableRefObject, ReactNode } from "react";

type SectionProps = {
	innerRef: MutableRefObject<HTMLDivElement | null> | undefined;
	children: ReactNode;
	[key: string]: any;
};

const Section = ({ innerRef, children, ...props }: SectionProps): JSX.Element => (
	<Flex 
		flex="1" 
		minH="100%" 
		bg="background" 
		direction="column" 
		justifyContent="center"
		padding="1rem 2rem 2rem 2rem"
		gap="2rem"
		ref={innerRef}
		{...props}
	>
		{children}
	</Flex>
);
export default Section;
