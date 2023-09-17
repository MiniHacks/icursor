import { Flex, Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { MutableRefObject } from "react";

export type HeaderProps = {
	logo?: string;
	what?: MutableRefObject<HTMLDivElement | null>;
	how?: MutableRefObject<HTMLDivElement | null>;
};

interface CustomLinkProps {
	href?: string;
	sectionRef: MutableRefObject<HTMLDivElement | null> | undefined;
	children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, sectionRef, children }) => {
	const scrollTo = (ref: MutableRefObject<HTMLDivElement | null> | undefined) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}
	
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
		onClick={() => scrollTo(sectionRef)}
		_hover={{
		  color: "orange"
		}}
	  >
		{children}
	  </Link>
	);
  };
  

const Header = ({ logo, what, how }: HeaderProps): JSX.Element => (
	<Flex marginBottom="94px">
	<Link zIndex="100" href="/">
	<Image       
		position="absolute"
		src={logo}
		boxSize='120px'
		alt="icursor logo"
		mx="48px"
	/>
	</Link>
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
		<CustomLink sectionRef={what}>What it Does</CustomLink>
		<CustomLink sectionRef={how}>How it Works</CustomLink>
		<CustomLink href="https://github.com/minihacks/" sectionRef={undefined}>🪿 🪿 🪿</CustomLink>
	</Flex>
	</Flex>
);
export default Header;
