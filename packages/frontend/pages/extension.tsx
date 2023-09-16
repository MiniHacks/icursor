import type { NextPage } from "next";
import { Text, Image, Box, Button, Flex, Heading, VStack, HStack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {

    const calibrate = () => {
        // inject calibration overlay script
        // inference on the frontend? suffer
        console.log("here");
        console.log(chrome.tabs);
    }

    const tracking = () => {

    }

    return (
        <PageLayout>
            <Flex direction="column" align="center" gap="1rem" paddingY="1rem">
                <HStack>
                <Image boxSize="24px" src="logo.png" />
                <Text as="b" color="white">
                    iCursor
                </Text>
                </HStack>
                
                <Button onClick={() => tracking()}>
                    Enable Eye Tracking
                </Button>
                <Button onClick={() => calibrate()}>
                    Calibrate
                </Button>
                <Text 
                    paddingX="1rem"
                    fontSize="2xs"
                    color="white"
                    opacity="60%"
                    alignSelf="start"
                    >
                    made with 🪿 from minihacks
                </Text>
            </Flex>

        </PageLayout>
    );
};

export default Home;
