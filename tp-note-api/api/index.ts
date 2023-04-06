import express from 'express';
import quizz from './routes/quizz';
import question from "./routes/question";
import reponse from "./routes/reponse";
import user from "./routes/user";
import questionTheme from "./routes/questionTheme";
import questionReponse from "./routes/questionReponse";

const router = express.Router();

router.use('/quizz', quizz);
router.use('/question', question);
router.use('/reponse', reponse);
router.use('/user', user);
router.use('/quizzquestion', questionTheme);
router.use('/questionreponse', questionReponse);

export default router;