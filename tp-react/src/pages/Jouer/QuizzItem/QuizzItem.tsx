import React, { useState } from "react";
import "./QuizzItem.css";
import {useNavigate} from "react-router-dom";
import {ItemQuizz} from "../../../types/Quizz/Quizz";

export default function QuizzItem(props: { index: number, quizz: ItemQuizz }) {
    const {quizz} = props;

    const [nombreQuestions, setNombreQuestions] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(-1);

    const navigate = useNavigate()
    const handleQuizzItemClick = () => {
        setIsOpen(!isOpen);
        if (openIndex !== props.index && openIndex !== -1) {
            setIsOpen(false);
        }
        setOpenIndex(props.index);
    };

    React.useEffect(() => {
        fetch('http://localhost:8080/api/quizzquestion')
            .then(response => response.json())
            .then(data =>
                // TODO : Verifier idQuizz est bien le bon
                setNombreQuestions(data.filter((quizzQuestion: any) => quizzQuestion.idTheme === quizz.title).length)
            )

    }, [])

    const handleQuizzModifierClick = (e: React.MouseEvent) => {
        // Aller à la page de modification du quizz qui est dans l'url /creer/:id
        navigate('/creer/1');
    }

    const handleQuizzResultastClick = (e: React.MouseEvent) => {
        // Aller à la page de résultat du quizz qui est dans l'url /:id
        navigate('/1');
    }

    return (
        <div className={"quizz-item"} onClick={handleQuizzItemClick}>
            <div className={"quizz-info"}>
                <h2>{quizz.title}</h2>
                <span>-</span>
                <span>{ nombreQuestions } questions</span>
            </div>
            {openIndex === props.index && isOpen && (
                <div className={"info"}>
                    <span onClick={handleQuizzModifierClick}>Modifier</span>
                    <span onClick={handleQuizzResultastClick}>Résultats</span>
                </div>
            )}
        </div>
    );
}
