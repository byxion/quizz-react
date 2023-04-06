import { Request, Response } from 'express';
import {QuestionThemeService} from "../services/questionTheme";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const questionTheme = QuestionThemeService.getAllQuestionTheme();
        res.send(questionTheme);
    });

route.post('/create',
    (req: Request, res: Response) => {
        const {idQuestion} = req.body;
        const {idQuizz} = req.body;

        QuestionThemeService.createQuestionTheme(idQuestion, idQuizz);
        res.sendStatus(201);
    })

export default route;