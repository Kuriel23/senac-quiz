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
  HStack,
  IconButton,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialog,
  useDisclosure,
} from "@chakra-ui/react";
import { BiInjection } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { SiSurveymonkey } from "react-icons/si";

import { Micos } from "../data/micos.js";

export default function PlayPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const localStorage =
    typeof window !== `undefined` ? window.localStorage : null;
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
        <AlertDialog isOpen={isOpen} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Mico!
              </AlertDialogHeader>

              <AlertDialogBody>
                {Micos[Math.floor(Math.random() * Micos.length)]}
              </AlertDialogBody>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Center
          width="100vw"
          minH="100vh"
          height="max-content"
          bgGradient="linear-gradient(336deg, rgba(29,2,76,1) 0%, rgba(15,0,21,1) 35%, rgba(15,0,21,1) 65%, rgba(29,2,76,1) 100%);"
        >
          <VStack>
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
                        w="150px"
                        my="30px"
                        pt="40%"
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
                        w="150px"
                        my="30px"
                        pt="40%"
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
                        w="150px"
                        my="30px"
                        pt="40%"
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
                        w="150px"
                        my="30px"
                        pt="40%"
                        mx="auto"
                      />
                    </VStack>
                  </Center>
                </Box>
              </Link>
            </SimpleGrid>
            <HStack mt="50px" justifyContent="space-between" display="flex">
              <IconButton
                colorScheme="purple"
                as={!isEnfermagem ? BiInjection : MdOutlineSchool}
                onClick={() => setIsEnfermagem(!isEnfermagem)}
                p="1"
                w="3vw"
                h="auto"
                borderRadius={25}
              />
              <IconButton
                colorScheme="purple"
                as={SiSurveymonkey}
                onClick={onOpen}
                p="1"
                w="3vw"
                h="auto"
                borderRadius={25}
              />
            </HStack>
          </VStack>
        </Center>
      </Section>
    </Container>
  );
}
