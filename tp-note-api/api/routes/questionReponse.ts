import { Request, Response } from 'express';
import {QuestionReponseService} from "../services/questionReponse";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const questionReponse = QuestionReponseService.getAllQuestionReponse();
        res.send(questionReponse);
    });

route.post('/create',
    (req: Request, res: Response) => {
        const {idQuestion} = req.body;
        const {idReponse} = req.body;

        QuestionReponseService.createQuestionReponse(idQuestion, idReponse);
        res.sendStatus(201);
    })

export default route;