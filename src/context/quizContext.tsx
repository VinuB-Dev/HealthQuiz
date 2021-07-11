import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import axios from "axios";

export const QuizContext = createContext<any>({});

export function QuizProvider({ children }:any) {
  const [answerSelected, SetAnswerSelected] = useState({});
  const [quiz, setquiz] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        "https://Healthquiz.bravesoldier.repl.co/quiz"
      );
      setquiz(response.data.quizes);
    })();
  }, []);

  return (
    <QuizContext.Provider value={{ quiz, answerSelected, SetAnswerSelected }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
