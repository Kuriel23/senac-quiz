import { Container, Section } from "../styles/pages/home";
import { useState, useEffect } from "react";
import {
  Text,
  Box,
  VStack,
  Link,
  Image,
  Center,
  SimpleGrid,
  Switch,
  HStack,
} from "@chakra-ui/react";

export default function PlayPage() {
  const localStorage = typeof window !== `undefined` ? window.localStorage : null
  const [isEnfermagem, setIsEnfermagem] = useState(
    localStorage && localStorage.getItem("isEnfermagem")
      ? JSON.parse(localStorage.getItem("isEnfermagem"))
      : false
  );

  useEffect(() => {
    localStorage.setItem("isEnfermagem", JSON.stringify(isEnfermagem));
  }, [isEnfermagem]);

  return (
    <Container>
      <Section>
        <Center
          width="100vw"
          minH="100vh"
          height="max-content"
          bgGradient="linear-gradient(336deg, rgba(29,2,76,1) 0%, rgba(15,0,21,1) 35%, rgba(15,0,21,1) 65%, rgba(29,2,76,1) 100%);"
        >
          <VStack>
            <HStack mb="25px">
              <Text color="white">Modo Enfermagem</Text>
              <Switch
                colorScheme="purple"
                size="lg"
                isChecked={isEnfermagem}
                onChange={(e) => setIsEnfermagem(e.target.checked)}
              />
            </HStack>
            <SimpleGrid
              columns={{ xl: 4, base: 1 }}
              spacing={10}
              w="95vw"
              maxH="50vh"
            >
              <Link href={"/red" + (isEnfermagem ? "-enfermagem" : "")}>
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
                        src="/logo3.png"
                        w="100px"
                        my="30px"
                        pt="100%"
                        mx="auto"
                      />
                    </VStack>
                  </Center>
                </Box>
              </Link>
              <Link href={"/yellow" + (isEnfermagem ? "-enfermagem" : "")}>
                <Box
                  bg="yellow.700"
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
                        src="/logo3.png"
                        w="100px"
                        my="30px"
                        pt="100%"
                        mx="auto"
                      />
                    </VStack>
                  </Center>
                </Box>
              </Link>
              <Link href={"/green" + (isEnfermagem ? "-enfermagem" : "")}>
                <Box
                  bg="green.600"
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
                        src="/logo3.png"
                        w="100px"
                        my="30px"
                        pt="100%"
                        mx="auto"
                      />
                    </VStack>
                  </Center>
                </Box>
              </Link>
              <Link href={"/blue" + (isEnfermagem ? "-enfermagem" : "")}>
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
                        src="/logo3.png"
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
          </VStack>
        </Center>
      </Section>
    </Container>
  );
}
