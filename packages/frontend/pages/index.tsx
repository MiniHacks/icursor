import { useRef } from "react";
import type { NextPage } from "next";
import { Flex, Image, Text } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import Section from "../components/Layout/Section";
import Header from "../components/Header";
import HeroText from "../components/HeroText";
import HeroFocus from "../components/HeroFocus";
import MainText from "../components/MainText";
import Feature from "../components/Feature";
import FooterText from "../components/FooterText";
import Bubble from "../components/Bubble";

const Home: NextPage = () => {

  const whatRef = useRef<HTMLDivElement | null>(null);
  const howRef = useRef<HTMLDivElement | null>(null);

  return (
    <PageLayout title={"iCursor"} desc={"Cursor that moves with the power of your eyes!"}>
      <Flex gap="24px" py="24px" px="120px" h="100%" minH="100%" bg="background" direction="column">
        <Section innerRef={undefined} marginBottom="4rem">
          <Image 
            zIndex="2"
            opacity="0.9"
            left="1000px"
            top="350px"
            src="cursor.svg"
            boxSize="100px"
            stroke="white"
            position="absolute"
          />
          <Image
            src="hero_bg.svg"
            position="absolute"
            top={0}
            right={0}
            width={["400px", "500px", "900px", "900px", "900px"]}
            height={["400px", "500px", "600px", "800px", "900px"]}
            maxWidth={"900px"}
            zIndex={0}
          />
          <Header logo="logo.png" what={whatRef} how={howRef} />
          <Flex zIndex="1" flex="1">
            <HeroText />
            <HeroFocus />
          </Flex>
        </Section>
        <Section innerRef={whatRef} id="what" marginBottom="4rem">
          <Image
            src="main_bg.svg"
            position="absolute"
            bottom="35%"
            left={0}
            width={["400px", "500px", "900px", "900px", "900px"]}
            height={["400px", "500px", "600px", "800px", "900px"]}
            maxWidth={"900px"}
            zIndex={0}
          />
          <MainText />
          <Flex
            flex="1"
            justifyContent="space-around"
            gap="2rem"
            zIndex={1}
          >
            <Feature image="logo.png" title="Read with your nose!"/>
            <Feature image="logo.png" title="Stop being a noob!"/>
            <Feature image="logo.png" title="Learn Vim anyway!"/>
          </Flex>
        </Section>
        <Section innerRef={howRef} id="how">
          <Image
            src="footer_bg.svg"
            position="absolute"
            bottom={0}
            right={0}
            width={["400px", "500px", "900px", "900px", "900px"]}
            height={["400px", "500px", "600px", "800px", "900px"]}
            maxWidth={"900px"}
            zIndex={0}
          />
          <FooterText />
          <Flex
            flex="1"
            direction="column"
            gap="6rem"
            margin="4rem"
            zIndex={1}
          >
            <Flex gap="2rem" align="center">
              <Bubble identifier="🦃" tooltip="" />
              <Text fontSize="regular" color="text">Not sure where to begin on the BE.</Text>
            </Flex>
            <Flex gap="2rem" align="center">
              <Bubble identifier="🦢" tooltip="" />
              <Text fontSize="regular" color="text">Not sure where to begin on the FE.</Text>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </PageLayout>
  );
};

export default Home;