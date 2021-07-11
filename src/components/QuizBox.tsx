import { Image, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import { useQuiz } from "../context/quizContext";
import { Quiz } from "../data_types/data_types";
export default function QuizBox() {
  const navigate = useNavigate();
  const { quiz } = useQuiz();
  return (
    <div>
      <QuizCard>
        {quiz.map((eachQuiz: Quiz) => {
          return (
            <Box key={eachQuiz._id} maxW="sm" borderRadius="lg" overflow="hidden" boxShadow="dark-lg">
              <Image height="15rem" width="fit-content" src={eachQuiz.image} />
              <Button
                m="2"
                colorScheme="teal"
                onClick={() => navigate("/quiz/" + eachQuiz._id)}
              >
                Play Quiz
              </Button>
            </Box>
          );
        })}
      </QuizCard>
    </div>
  );
}
