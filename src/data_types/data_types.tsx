export type Quiz = {
  _id: string;
  image: string;
  name: string;
  questions: Question[];
  answers: number[];
};

export type Question = {
  questionId: number;
  question: string;
  options: Option[];
};

export type Option = {
  optionId: number;
  option: string;
};
