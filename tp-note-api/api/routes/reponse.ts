import { Request, Response } from 'express';
import {ReponseService} from "../services/reponse";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const reponse = ReponseService.getAllReponse();
        res.send(reponse);
    });

route.post('/create',
    (req: Request, res: Response) => {
        const {title} = req.body;
        const {isTrue} = req.body;
        ReponseService.createReponse(title, isTrue);
        res.sendStatus(201);
    })

export default route;