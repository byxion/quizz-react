import { Question } from '../models/question/question';
import { QuestionHelpers } from '../models/question/helpers';

export namespace QuestionService {
    export const getAllQuestion = (): Array<Question> => {
        return QuestionHelpers.getAllQuestion();
    }
    export const createQuestion = (title: string): void => {
        QuestionHelpers.createQuestion(title);
    }
}