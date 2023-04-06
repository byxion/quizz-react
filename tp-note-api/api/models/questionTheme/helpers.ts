import { QuestionTheme } from './questiontheme';
import { database } from '../../config/database';

export namespace QuestionThemeHelpers {
    export const getAllQuestionTheme = (): Array<QuestionTheme> => {
        return database.prepare('SELECT * FROM QuestionTheme').all();
    }
    export const createQuestionTheme = (idQuestion: string, idTheme: string): void => {
        database.prepare('INSERT INTO QuestionTheme(idQuestion, idTheme) VALUES(?, ?)')
            .run([idQuestion, idTheme]);
    }
}