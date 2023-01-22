import { Container, Section } from "../styles/pages/home";

import {
  Text,
  Box,
  VStack,
  Link,
  Image,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

export default function PlayPage() {
  return (
    <Container>
      <Section>
        <Center
          width="100vw"
          height="100vh"
          bgGradient="linear-gradient(336deg, rgba(29,2,76,1) 0%, rgba(15,0,21,1) 35%, rgba(15,0,21,1) 65%, rgba(29,2,76,1) 100%);"
        >
          <SimpleGrid
            columns={{ xl: 4, base: 1 }}
            spacing={10}
            w="90vw"
            maxH="50vh"
          >
            <Link href="/red">
              <Box
                bg="red.700"
                borderRadius={15}
                borderWidth="3px"
                borderColor="white"
                w="100%"
                h="50vh"
                transitionDuration="0.5s"
                transitionProperty="transform"
                _hover={{
                  transform: "rotate(-5deg)",
                  webkitTransform: "rotate(-5deg)",
                }}
              >
                <Center>
                  <VStack>
                    <Text
                      pt="100%"
                      my="5vh"
                      color="white"
                      fontSize="5xl"
                      textAlign="center"
                    >
                      ?
                    </Text>
                    <Image
                      src="/logo.png"
                      w="100px"
                      my="30px"
                      pt="100%"
                      mx="auto"
                    />
                  </VStack>
                </Center>
              </Box>
            </Link>
            <Link href="/purple">
              <Box
                bg="purple.700"
                borderRadius={15}
                borderWidth="3px"
                borderColor="white"
                w="100%"
                h="50vh"
                transitionDuration="0.5s"
                transitionProperty="transform"
                _hover={{
                  transform: "rotate(5deg)",
                  webkitTransform: "rotate(5deg)",
                }}
              >
                <Center>
                  <VStack>
                    <Text
                      pt="100%"
                      my="5vh"
                      color="white"
                      fontSize="5xl"
                      textAlign="center"
                    >
                      ?
                    </Text>
                    <Image
                      src="/logo.png"
                      w="100px"
                      my="30px"
                      pt="100%"
                      mx="auto"
                    />
                  </VStack>
                </Center>
              </Box>
            </Link>
            <Link href="/yellow">
              <Box
                bg="yellow.600"
                borderRadius={15}
                borderWidth="3px"
                borderColor="white"
                w="100%"
                h="50vh"
                transitionDuration="0.5s"
                transitionProperty="transform"
                _hover={{
                  transform: "rotate(-5deg)",
                  webkitTransform: "rotate(-5deg)",
                }}
              >
                <Center>
                  <VStack>
                    <Text
                      pt="100%"
                      my="5vh"
                      color="white"
                      fontSize="5xl"
                      textAlign="center"
                    >
                      ?
                    </Text>
                    <Image
                      src="/logo.png"
                      w="100px"
                      my="30px"
                      pt="100%"
                      mx="auto"
                    />
                  </VStack>
                </Center>
              </Box>
            </Link>
            <Link href="/blue">
              <Box
                bg="blue.700"
                borderRadius={15}
                borderWidth="3px"
                borderColor="white"
                w="100%"
                h="50vh"
                transitionDuration="0.5s"
                transitionProperty="transform"
                _hover={{
                  transform: "rotate(5deg)",
                  webkitTransform: "rotate(5deg)",
                }}
              >
                <Center>
                  <VStack>
                    <Text
                      pt="100%"
                      my="5vh"
                      color="white"
                      fontSize="5xl"
                      textAlign="center"
                    >
                      ?
                    </Text>
                    <Image
                      src="/logo.png"
                      w="100px"
                      my="30px"
                      pt="100%"
                      mx="auto"
                    />
                  </VStack>
                </Center>
              </Box>
            </Link>
          </SimpleGrid>
        </Center>
      </Section>
    </Container>
  );
}
