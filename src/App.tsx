import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
export default function App () {
  return (
  <ChakraProvider theme={theme}>
    <Navbar/>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:embedId" element={<Quiz />}></Route>
        <Route path="/result/:embedId" element={<Result />} />{" "}
        </Routes>
      </Grid>
    </Box>
  </ChakraProvider>)
}
