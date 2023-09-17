import { Flex, Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export type HeaderProps = {
	logo?: string;
};

const Header = ({ logo }: HeaderProps): JSX.Element => (
	<Flex 
		flex="1" 
		justifyContent="space-between"
		alignItems="center"
		marginBottom="94px"
		zIndex="12"
	>
		<Image       
			src={logo}
			boxSize='100px'
			alt="icursor logo"
		/>
		<Link> wow </Link>
		<Link> wow </Link>
		<Link> wow </Link>
		<Link> wow </Link>
	</Flex>
);
export default Header;
