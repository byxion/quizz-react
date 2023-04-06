import React from "react";
import './Jouer.css';
import ToutLesQuizz from "./ToutLesQuizz/ToutLesQuizz";

export default function Jouer() {
    return (
        <div className={'jouer'}>
            <h1>Choix du quizz</h1>
            <ToutLesQuizz />
            <div>
                <span>Mon nom : </span>
                <input type={'text'}/>
                <button>Jouer</button>
            </div>
        </div>
    );
}