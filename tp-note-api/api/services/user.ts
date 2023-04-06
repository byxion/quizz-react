import { User } from '../models/user/user';
import { UserHelpers } from '../models/user/helpers';

export namespace UserService {
    export const getAllUser = (): Array<User> => {
        return UserHelpers.getAllUser();
    }
    export const createUser = (nom: string): void => {
        UserHelpers.createUser(nom);
    }
}