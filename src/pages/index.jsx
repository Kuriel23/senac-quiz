import { Container, Section } from "../styles/pages/home";
import { Play } from "phosphor-react";

import {
  Button,
  VStack,
  Link,
  Image,
  Center,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Section>
        <Center
          width="100vw"
          height="100vh"
          bgGradient="linear-gradient(336deg, rgba(29,2,76,1) 0%, rgba(15,0,21,1) 35%, rgba(15,0,21,1) 65%, rgba(29,2,76,1) 100%);"
        >
          <VStack display="table" margin="0" textAlign="center">
            <Image src="/logo3.png" w="300px" my="30px" />
            <Link href="/play">
            <Button
              w="200px"
              h="200px"
              borderColor="white"
              borderWidth="3px"
              borderRadius="150px"
              bg="rgba(29,2,76,1)"
              _hover={{ bg: "rgba(29,2,76,0.5)" }}
              _active={{ bg: "rgba(29,2,76,0.3)" }}
            >
              <Play size={120} weight="thin" color="white" />
              </Button>
              </Link>
            <Image
              src="/senac_logo.png"
              w="300px"
              display="block"
              opacity="0.4"
            />
          </VStack>
        </Center>
      </Section>
    </Container>
  );
}
