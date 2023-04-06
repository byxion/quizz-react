import { QuestionReponse } from './questionReponse';
import { database } from '../../config/database';

export namespace QuestionReponseHelpers {
    export const getAllQuestionReponse = (): Array<QuestionReponse> => {
        return database.prepare('SELECT * FROM ReponseQuestion').all();
    }
    export const createQuestionReponse = (idQuestion: string, idReponse: string): void => {
        database.prepare('INSERT INTO ReponseQuestion(idReponse, idQuestion) VALUES(?, ?)')
            .run([idReponse, idQuestion]);
    }
}