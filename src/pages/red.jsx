import { Container, Section } from "../styles/pages/home";
import React, { useState, useEffect } from "react";
import { Questions } from "../data/redQuestions.js";

import { useRouter } from "next/router";
import UseAnimations from "react-useanimations";
import alertCircle from "react-useanimations/lib/alertCircle";
import radioButton from "react-useanimations/lib/radioButton";

import {
  Text,
  Box,
  Image,
  Divider,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function PlayPage() {
  const [timeLeft, setTimeLeft] = useState(30); // inicializa o contador com 30 segundos
  const [userChoice, setUserChoice] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1); // decrementa o tempo restante a cada segundo
      } else {
        setTimeLeft("FIM");
        setTimeout(() => {
          router.push("/play");
        }, 10000);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const randomQuestion =
    Questions[Math.floor(Math.random() * Questions.length)];

  function handleClick(index) {
    setUserChoice(true);
    if (index === randomQuestion.correct) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }
  const router = useRouter();
  return (
    <Container>
      <Section>
        <Center
          width="100vw"
          height="100vh"
          bgGradient="linear-gradient(336deg, red 0%, rgba(15,0,21,1) 35%, rgba(15,0,21,1) 65%, red 100%);"
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
                color="red"
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
            {timeLeft === "FIM" ? (
              <Alert
                status="error"
                variant="subtle"
                colorScheme="red"
                w="max-content"
                m="auto"
                mt={4}
              >
                <AlertIcon />
                Tempo esgotado!
              </Alert>
            ) : (
              <></>
            )}
            <Modal isOpen={userChoice} onClose={() => 0} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader m="auto">
                  <UseAnimations
                    autoplay
                    loop
                    animation={isCorrect ? radioButton : alertCircle}
                    size={120}
                    strokeColor={isCorrect ? "#00FF00" : "red"}
                    speed={0.5}
                  />
                </ModalHeader>
                <ModalBody m="auto" fontWeight={700} fontSize="3xl">
                  {isCorrect
                    ? "Parabéns, você acertou!"
                    : "Infelizmente, você errou."}
                </ModalBody>
                <ModalFooter m="auto">
                  <Button
                    bg="yellow.100"
                    _hover={{ background: "yellow.300" }}
                    mr={3}
                    onClick={() => router.push("/play")}
                  >
                    Continuar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

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
                  onClick={() =>
                    !userChoice && timeLeft !== "FIM"
                      ? handleClick(index)
                      : null
                  }
                  cursor={!userChoice && timeLeft !== "FIM" ? "pointer" : null}
                  bg={
                    userChoice || timeLeft === "FIM"
                      ? randomQuestion.correct === index
                        ? "green"
                        : "red"
                      : "yellow.100"
                  }
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
