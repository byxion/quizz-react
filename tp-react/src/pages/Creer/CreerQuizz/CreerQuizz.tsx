import React from "react";
import './CreerQuizz.css';
import QuizzForm from "../../../components/QuizzForm/QuizzForm";

export default function CreerQuizz() {
    return (
        <div className={'creer-quizz'}>
            <h1>Creer un Quizz</h1>
            <div className={'creer-quizz-form'}>
                <QuizzForm />
            </div>
        </div>
    );
}