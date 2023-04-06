import { QuestionReponse } from '../models/questionReponse/questionReponse';
import { QuestionReponseHelpers } from '../models/questionReponse/helpers';

export namespace QuestionReponseService {
    export const getAllQuestionReponse = (): Array<QuestionReponse> => {
        return QuestionReponseHelpers.getAllQuestionReponse();
    }
    export const createQuestionReponse = (idQuestion: string, idReponse: string): void => {
        QuestionReponseHelpers.createQuestionReponse(idQuestion, idReponse);
    }
}