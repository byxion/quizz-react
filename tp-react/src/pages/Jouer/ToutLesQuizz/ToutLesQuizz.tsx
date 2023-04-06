import React from "react";
import './ToutLesQuizz.css';
import QuizzItem from "../QuizzItem/QuizzItem";
import {ItemQuizz} from "../../../types/Quizz/Quizz";

export default function ToutLesQuizz() {
    const [quizzs, setQuizzs] = React.useState<ItemQuizz[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:8080/api/quizz')
            .then(response => response.json())
            .then(data => setQuizzs(data))

    })

    return (
        <div className={'tout-les-quizz'}>
            {
                quizzs.map((quizz, index) => {
                    return <QuizzItem key={index} quizz={quizz} index={-1}/>;
                })
            }
        </div>
    );
}