import { User } from './user';
import { database } from '../../config/database';

export namespace UserHelpers {
    export const getAllUser = (): Array<User> => {
        return database.prepare('SELECT * FROM User').all();
    }
    export const createUser = (nom: string): void => {
        database.prepare('INSERT INTO User(nom) VALUES(?)')
            .run([nom]);
    }
}