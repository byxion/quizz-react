import { Question } from './question';
import { database } from '../../config/database';

export namespace QuestionHelpers {
    export const getAllQuestion = (): Array<Question> => {
        return database.prepare('SELECT * FROM Question').all();
    }
    export const createQuestion = (title: string): void => {
        database.prepare('INSERT INTO Question(title) VALUES(?)')
            .run([title]);
    }
}