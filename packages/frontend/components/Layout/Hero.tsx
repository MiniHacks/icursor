import { Flex, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

type HeroProps = {
	children: ReactNode;
};

const Hero = ({ children }: HeroProps): JSX.Element => (
	<Flex flex="1">
		{children}
		<Image
			src="hero_bg.svg"
			position="absolute"
			top={0}
			right={0}
			width="60%"
			height="auto"
		/>
	</Flex>
);
export default Hero;
