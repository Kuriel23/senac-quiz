import { Container, Section } from "../styles/pages/home";
import React, { useState, useEffect } from "react";
import { Questions } from "../data/blueQuestions.js";

import {
  Text,
  Box,
  Divider,
  Center,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

export default function PlayPage() {
  const [timeLeft, setTimeLeft] = useState(30); // inicializa o contador com 30 segundos

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1); // decrementa o tempo restante a cada segundo
      } else {
          setTimeLeft("FIM")
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const randomQuestion =
    Questions[Math.floor(Math.random() * Questions.length)];
  return (
    <Container>
      <Section>
        <Center
          width="100vw"
          height="100vh"
          bgGradient="linear-gradient(336deg, blue 0%, rgba(15,0,21,1) 35%, rgba(15,0,21,1) 65%, blue 100%);"
        >
          <Box bg="gray.200" w="90vw" h="90vh" borderRadius="25px">
            <Center>
              <CircularProgress
                value={timeLeft !== "FIM" ? timeLeft : 0}
                max={30}
                size="120px"
                thickness="10px"
                capIsRound
                bg="purple"
                trackColor="black"
                borderRadius="550px"
                my="30px"
                mb="20px"
                color="blue"
              >
                <CircularProgressLabel
                  color="white"
                  fontWeight={500}
                  fontSize="5xl"
                >
                  {timeLeft}
                </CircularProgressLabel>
              </CircularProgress>
            </Center>
            <Text
              fontSize="5xl"
              my="30px"
              maxW="95%"
              textAlign="center"
              fontWeight="700"
            >
              {randomQuestion.question}
            </Text>
            <Divider mb="20px" />
            {randomQuestion.choices.map((choice, index) => {
              return (
                <Box
                  w="95%"
                  m="auto"
                  mb="30px"
                  h="10%"
                  borderWidth="1px"
                  borderColor="black"
                  borderRadius="25px"
                >
                  <Text fontSize="3xl" textAlign="left" p="2vh">
                    {index + 1}. {choice}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Center>
      </Section>
    </Container>
  );
}
