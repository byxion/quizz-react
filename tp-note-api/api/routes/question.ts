import { Request, Response } from 'express';
import {QuestionService} from "../services/question";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const question = QuestionService.getAllQuestion();
        res.send(question);
    });

route.post('/create',
    (req: Request, res: Response) => {
        const {title} = req.body;
        QuestionService.createQuestion(title);
        res.sendStatus(201);
    })

export default route;