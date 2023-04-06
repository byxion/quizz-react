import React from "react";
import './ModifierQuizz.css';
import QuizzForm from "../../../components/QuizzForm/QuizzForm";

export default function ModifierQuizz() {
    return (
        <div className={'modifier-quizz'}>
            <h1>Modifier un Quizz</h1>
            <div>
                <QuizzForm />
            </div>
        </div>
    );
}