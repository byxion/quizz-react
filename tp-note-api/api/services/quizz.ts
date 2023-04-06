import { Quizz } from '../models/quizz/quizz';
import { QuizzHelpers } from '../models/quizz/helpers';

export namespace QuizzService {
    export const getAllQuizz = (): Array<Quizz> => {
        return QuizzHelpers.getAllQuizz();
    }
    export const createQuizz = (title: string): void => {
        QuizzHelpers.createQuizz(title);
    }
}