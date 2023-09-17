import { Flex, Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export type HeaderProps = {
	logo?: string;
};

interface CustomLinkProps {
	href: string;
	children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
	return (
	  <Link
		fontWeight="semibold"
		color="white"
		opacity="80%"
		transition='ease 0.5s'
		bg='transparent'
		p="8px"
		borderRadius="8px"
		textDecoration='none'
		href={href}
		_hover={{
		  color: "orange"
		}}
	  >
		{children}
	  </Link>
	);
  };
  

const Header = ({ logo }: HeaderProps): JSX.Element => (
	<Flex marginBottom="94px">
	<Image       
		position="absolute"
		src={logo}
		boxSize='120px'
		alt="icursor logo"
		mx="48px"
	/>
	<Flex 
		flex="1" 
		justifyContent="flex-end"
		alignItems="center"
		h="56px"
		my="30px"
		px="48px"
		zIndex="12"
		fontSize="18px"
		borderRadius="16px"
		bg="rgba(47, 47, 51, 0.2)"
		backdropBlur="10px"
		boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
		gap="96px"
		opacity="0.8"
	>	
		<CustomLink href='#what'>What it Does</CustomLink>
		<CustomLink href='#how'>How it Works</CustomLink>
		<CustomLink href=''>🪿 🪿 🪿</CustomLink>
	</Flex>
	</Flex>
);
export default Header;
