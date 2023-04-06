import { Request, Response } from 'express';
import {QuizzService} from "../services/quizz";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const quizz = QuizzService.getAllQuizz();
        res.send(quizz);
    });

route.post('/create',
    (req: Request, res: Response) => {
        const {title} = req.body;

        QuizzService.createQuizz(title);
        res.sendStatus(201);
    })

export default route;