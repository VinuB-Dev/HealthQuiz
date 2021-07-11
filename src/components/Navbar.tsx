import { Flex, Heading, Box, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useQuiz } from "../context/quizContext";

export default function Navbar() {
  const { SetAnswerSelected } = useQuiz();

  const navigate = useNavigate();

  function clickHandler() {
    navigate("/");
    SetAnswerSelected({});
  }
  return (
    <Flex>
      <Box p="3">
        <Heading
        textShadow="1px 1px #93C5FD"
          _hover={{
            cursor: "pointer"
          }}
          size="md"
          onClick={() => {
            clickHandler();
          }}
        >
          Health Quiz
        </Heading>
        </Box>
        <Spacer/>
        <Box mr="3"> <ColorModeSwitcher justifySelf="flex-end"/></Box>
      </Flex>
  );
}
