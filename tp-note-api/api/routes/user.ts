import { Request, Response } from 'express';
import {UserService} from "../services/user";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const user = UserService.getAllUser();
        res.send(user);
    });

route.post('/create',
    (req: Request, res: Response) => {
        const {nom} = req.body;

        UserService.createUser(nom);
        res.sendStatus(201);
    })

export default route;