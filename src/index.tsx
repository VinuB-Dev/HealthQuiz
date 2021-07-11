import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import { render } from "react-dom";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./context/quizContext";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Router>
    <QuizProvider>
    <ColorModeScript />
    <App />
    </QuizProvider>
    </Router>
  </React.StrictMode>,
  rootElement
)
