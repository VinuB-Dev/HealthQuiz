import { Box, Container, Flex, Button, Spacer, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useState } from "react";
import { setOptionSelected } from "../utils/utils";
import { useQuiz } from "../context/quizContext";
import { useNavigate } from "react-router-dom";
import { Quiz, Option } from "../data_types/data_types";

export default function QuestionCard() {
  const [optionSelected, updateOption] = useState(0);
  const [questionSelected, updatequestion] = useState(0);
  const { quiz, answerSelected, SetAnswerSelected } = useQuiz();

  const embedId = useParams();
  const selectedQuiz = quiz.find(
    (quizz: Quiz) => quizz["_id"] === embedId.embedId
  );

  const { name, questions } = selectedQuiz;
  const { questionId, question, options } = questions[questionSelected];
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "current"}}>
      <Box>
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

        <Box
          p="2"
          w={["100%", "40%", "29%"]}
          m={"auto"}
          mt="1"
          color="current"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          borderRadius="10"
          boxShadow="lg"
        >
          Question {questionId}
        </Box>
        <Container centerContent>
          <Flex direction="column" mt="5">
            <Box as="b" bg="current" p="5" borderRadius="10" boxShadow="lg" bgGradient="linear(to-l, #7928CA, #FF0080)">
              {question}
            </Box>
            <Container centerContent>
              {options.map((option: Option) => (
                <Flex direction="column" mt="5" bg="current">
                  <Button
                    width={[300, 300, 400]}
                    colorScheme={
                      answerSelected[questionId] === option["optionId"]
                        ? "teal"
                        : "blackAlpha"
                    }
                    onClick={() => {
                      updateOption(option["optionId"]);
                      SetAnswerSelected(
                        setOptionSelected(
                          questionId,
                          answerSelected,
                          option["optionId"]
                        )
                      );
                    }}
                  >
                    {option.option}
                  </Button>
                </Flex>
              ))}
            </Container>
          </Flex>
        </Container>
        <Flex mt="3" ml={["", "20%", "30%"]} mr={["", "20%", "30%"]}>
          {questionId !== questions[0]["questionId"] && (
            <Button
              colorScheme="blue"
              onClick={() => {
                updatequestion(questionSelected - 1);
              }}
            >
              Previous
            </Button>
          )}
          <Spacer />
          {questionId !== questions.length && (
            <Button
              colorScheme="blue"
              onClick={() => {
                updatequestion(questionSelected + 1);
              }}
            >
              Next
            </Button>
          )}
        </Flex>
      </Box>

      {Object.keys(answerSelected).length === questions.length ? (
        <Button
          m="3"
          onClick={() => {
            navigate("/result/" + selectedQuiz._id);
          }}
        >
          Submit
        </Button>
      ) : (
        questionId === questions.length && <div>Answer all questions</div>
      )}
    </div>
  );
}
