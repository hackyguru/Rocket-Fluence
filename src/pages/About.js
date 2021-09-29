import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  IconButton,
  Spacer,
  VStack,
  Icon,
  Center,
  Text,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiHelpCircle, FiInfo, FiSettings } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function About() {
  return (
    <Box w="350px" h="600px" bgGradient="linear(to-b, #12395A, #6BC4CE)">
      <VStack align="stretch" width="100%">
        <Box>
          <Flex>
            <Box p="2">
              <Flex>
                <Link to="/">
                  <IconButton
                    size="lg"
                    variant="unstyled"
                    aria-label="Info"
                    icon={<Icon color="white" as={IoArrowBackCircleOutline} />}
                  />
                </Link>
                <Heading
                  paddingTop="3"
                  fontSize="20"
                  color="white"
                  fontFamily={"monospace"}
                >
                  rocket
                </Heading>
              </Flex>
            </Box>
            <Spacer />
            <Box p="2.5">
              <ChakraLink
                href="https://cipher-infoline.gitbook.io/rocket-ipfs/"
                isExternal
              >
                <IconButton
                  variant="unstyled"
                  aria-label="Info"
                  icon={<Icon color="white" as={FiHelpCircle} />}
                  // onClick={<Redirect to="/about" />}
                />
              </ChakraLink>
              <Link to="/about">
                <IconButton
                  variant="unstyled"
                  aria-label="Info"
                  icon={<Icon color="white" as={FiInfo} />}
                />
              </Link>
              <Link to="/settings">
                <IconButton
                  variant="unstyled"
                  aria-label="Settings"
                  icon={<Icon color="white" as={FiSettings} />}
                />
              </Link>
            </Box>
          </Flex>
        </Box>
        <Center padding="15">
          <Box boxSize="100px">
            <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
          </Box>
        </Center>
        <Center>
          <Heading
            padding={3}
            fontSize="20"
            color="white"
            fontFamily={"monospace"}
          >
            About rocket
          </Heading>
        </Center>

        <Center>
          <Box
            bgImage="url('https://cdn.discordapp.com/attachments/873587956013752340/877665795377889330/Glass.png')"
            width="94%"
            height="225"
          >
            <Text
              textAlign="center"
              color="white"
              fontFamily="monospace"
              padding="15px"
            >
              Just like rockets connect different planets - Rocket connects you
              to IPFS across different browsers.
              <br />
              <br />
              You can seamlessly transfer push files to the IPFS right from your
              browser and make your files immutable and censorship resistant -
              all in just one click!
              <br />
              <br />
              With tons of features like saving files, minting an NFT, hosting
              IPFS enabled websites etc., - we will be adding more feature in
              our upcoming versions.
              <br />
              <br />
              Feel free to contribute at <b>github.com/rocket-ipfs</b>
            </Text>
          </Box>
        </Center>
        <Spacer />
        <Center>
          <Box
            padding="15"
            bgColor="#12395A"
            borderRadius="20"
            width="94%"
            height="75"
          >
            <Flex>
              <IconButton
                variant="unstyled"
                aria-label="Help"
                icon={<Icon color="#6BC4CE" as={FiHelpCircle} />}
              />
              <Spacer />
              <IconButton
                variant="unstyled"
                aria-label="Help"
                icon={<Icon color="#6BC4CE" as={FiHelpCircle} />}
              />
              <Spacer />
              <IconButton
                variant="unstyled"
                aria-label="Help"
                icon={<Icon color="#6BC4CE" as={FiHelpCircle} />}
              />
            </Flex>
          </Box>
        </Center>
        <Center>
          <Text fontSize="7">Made in ❤️ with IPFS</Text>
        </Center>
      </VStack>
    </Box>
  );
}
