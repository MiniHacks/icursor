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
  return (
    <PageLayout title={"icursor"} desc={"Cursor that moves with the power of your eyes!"}>
      <Flex gap="24px" py="24px" px="120px" h="100%" minH="100%" bg="background" direction="column">
        <Section marginBottom="4rem">
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
          <Header logo="logo.png"/>
          <Flex flex="1">
            <HeroText />
            <HeroFocus />
          </Flex>
        </Section>
        <Section marginBottom="4rem">
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
            <Feature image="logo.png" title="cool feature 1"/>
            <Feature image="logo.png" title="cool feature 2"/>
            <Feature image="logo.png" title="cool feature 3"/>
          </Flex>
        </Section>
        <Section>
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
              <Bubble identifier="1" tooltip="" />
              <Text fontSize="regular" color="text">Cool explanation here, snap effect.</Text>
            </Flex>
            <Flex gap="2rem" align="center">
              <Bubble identifier="2" tooltip="" />
              <Text fontSize="regular" color="text">Cool explanation here, snap effect.</Text>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </PageLayout>
  );
};

export default Home;