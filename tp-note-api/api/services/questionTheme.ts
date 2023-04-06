import { QuestionTheme } from '../models/questionTheme/questiontheme';
import { QuestionThemeHelpers } from '../models/questionTheme/helpers';

export namespace QuestionThemeService {
    export const getAllQuestionTheme = (): Array<QuestionTheme> => {
        return QuestionThemeHelpers.getAllQuestionTheme();
    }
    export const createQuestionTheme = (idQuestion: string, idTheme: string): void => {
        QuestionThemeHelpers.createQuestionTheme(idQuestion, idTheme);
    }
}