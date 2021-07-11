import { SimpleGrid } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
};

export default function QuizCard({ children }: CardProps) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px" m="3">
      {children}
    </SimpleGrid>
  );
}
