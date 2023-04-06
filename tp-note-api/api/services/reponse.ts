import { Reponse } from '../models/reponse/reponse';
import { ReponseHelpers } from '../models/reponse/helpers';

export namespace ReponseService {
    export const getAllReponse = (): Array<Reponse> => {
        return ReponseHelpers.getAllReponse();
    }
    export const createReponse = (title: string, isTrue: number): void => {
        ReponseHelpers.createReponse(title, isTrue);
    }
}