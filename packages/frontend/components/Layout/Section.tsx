import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type SectionProps = {
	children: ReactNode;
	[key: string]: any;
};

const Section = ({ children, ...props }: SectionProps): JSX.Element => (
	<Flex 
		flex="1" 
		minH="100%" 
		bg="background" 
		direction="column" 
		justifyContent="center"
		padding="1rem 2rem 2rem 2rem"
		gap="2rem"
		{...props}
	>
		{children}
	</Flex>
);
export default Section;
