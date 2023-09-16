import type { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import Hero from "../components/Layout/Hero";
import Header from "../components/Layout/Header";

const Home: NextPage = () => {
  return (
    <PageLayout title={"icursor"} desc={"Cursor that moves with the power of your eyes!"}>
      <Flex h={"100%"}>
        <Hero>
          <Header logo="logo.png"/>
        </Hero>
      </Flex>
    </PageLayout>
  );
};

export default Home;
