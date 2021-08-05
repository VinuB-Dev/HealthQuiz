import { checkAnswers } from './utils/utils'

test('must check if answers are correct and return the score', () => {
  const answers = [1, 2, 1, 1, 3]
  const answerSelected = { 1: 1, 2: 2, 3: 1, 4: 2, 5: 1 }
  const score = checkAnswers(answers, answerSelected)
  expect(score).toBe(30)
})
