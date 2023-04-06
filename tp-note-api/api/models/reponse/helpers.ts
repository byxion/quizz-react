import { Reponse } from './reponse';
import { database } from '../../config/database';

export namespace ReponseHelpers {
    export const getAllReponse = (): Array<Reponse> => {
        return database.prepare('SELECT * FROM Reponse').all();
    }
    export const createReponse = (title: string, isTrue: number): void => {
        database.prepare('INSERT INTO Reponse(title, isTrue) VALUES(?, ?)')
            .run([title, isTrue]);
    }
}