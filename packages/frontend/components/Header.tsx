import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export type HeaderProps = {
	logo?: string;
};

const Header = ({ logo }: HeaderProps): JSX.Element => (
	<Flex 
		flex="1" 
		justifyContent="flex-start"
		marginBottom="2rem"
	>
		<Image       
			src={logo}
			boxSize='150px'
			alt="icursor logo"
		/>
	</Flex>
);
export default Header;
