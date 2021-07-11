import { Box } from "@chakra-ui/react";

export default function Content() {
  const slogans = [
    "Seven Days without Exercise Makes One Weak",
    "Your health comes first!",
    "Health is a Boon – Care for it",
    "Go healthy and happy!",
    "An Apple a day does keep the doctor away",
    "U can’t ‘get’ wealth if U R not in good health",
    "Health is Wealth – Keep this treasure Safe"
  ];
  return (
    <Box bgGradient="linear(to-t, green.200, pink.500)" fontSize="20">
      {slogans[Math.floor(Math.random() * 7)]}
    </Box>
  );
}
