type SelectedOption = {
  [QuestionNumber: number]:number;
}

export function setOptionSelected(QuestionNumber:number, OptionSelected:SelectedOption, option:number) {
  console.log(OptionSelected);
  OptionSelected[QuestionNumber] = option;
  return OptionSelected;
}

export function checkAnswers(answers:number[], options:number[]) {
  return Object.values(options).reduce((score, option, index) => {
    return (score = option === answers[index] ? (score = score + 10) : score);
  }, 0);
}
