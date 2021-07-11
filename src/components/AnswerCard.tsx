import { Box, Container, Flex, Button, Center } from "@chakra-ui/react";
import { Quiz, Question } from "../data_types/data_types";

import { useNavigate } from "react-router-dom";

import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { checkAnswers } from "../utils/utils";
import { useQuiz } from "../context/quizContext";
import { useParams } from "react-router-dom";

export default function AnswerCard() {
  const { quiz, answerSelected, SetAnswerSelected } = useQuiz();
  const embedId = useParams();
  const selectedQuiz = quiz.find(
    (quizz: Quiz) => quizz["_id"] === embedId.embedId
  );
  const { name, questions, answers } = selectedQuiz;
  var score = 0;
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/");
    SetAnswerSelected({});
  }

  return (
    <div style={{ backgroundColor: "current" }}>
      <Center>
        <Box
          p="2"
          mt="1"
          color="current"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          borderRadius="10"
          boxShadow="lg"
        >
          {name}
        </Box>
      </Center>
      <Button
        m="3"
        p="3"
        onClick={() => {
          clickHandler();
        }}
      >
        Exit
      </Button>
      <Box
        p="2"
        mt="1"
        color="current"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        borderRadius="10"
        boxShadow="lg"
      >
        Score: {checkAnswers(answers, answerSelected)} / {answers.length * 10}
      </Box>
      {questions.map((question: Question, i: number) => {
        return (
          <Box>
            <Box
              p="2"
              w={["100%", "40%", "29%"]}
              m={"auto"}
              mt="6"
              color="current"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              borderRadius="10"
              boxShadow="lg"
            >
              Question {question.questionId}
            </Box>
            {answerSelected[question.questionId] === answers[i] ? (
              <Center fontSize="4xl" color="green">
                <TiTick />
              </Center>
            ) : (
              <Center fontSize="3xl" color="red" mt="1">
                {" "}
                <ImCross />
              </Center>
            )}
            <Container centerContent>
              <Flex direction="column" mt="5" mb="5">
                <Box as="b" bg="current" p="5" borderRadius="10" boxShadow="lg" bgGradient="linear(to-l, #7928CA, #FF0080)">
                  {question.question}
                </Box>
                <Container centerContent>
                  {question.options.map((option) => (
                    <Flex direction="column" mt="5" bg="current">
                      <Button
                        width={[300, 300, 400]}
                        colorScheme={
                          option.optionId === answers[i]
                            ? "green"
                            : answerSelected[question.questionId] ===
                              option.optionId
                            ? "red"
                            : "blackAlpha"
                        }
                      >
                        {option.option}
                      </Button>
                    </Flex>
                  ))}
                </Container>
              </Flex>
            </Container>
          </Box>
        );
      })}
    </div>
  );
}
