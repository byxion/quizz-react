import { Quizz } from './quizz';
import { database } from '../../config/database';

export namespace QuizzHelpers {
    export const getAllQuizz = (): Array<Quizz> => {
        return database.prepare('SELECT * FROM Quizz').all();
    }
    export const createQuizz = (title: string): void => {
        database.prepare('INSERT INTO Quizz(title) VALUES(?)')
            .run([title]);
    }
}