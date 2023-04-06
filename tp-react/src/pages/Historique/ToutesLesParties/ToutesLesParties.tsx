import React from "react";
import './ToutesLesParties.css';
import Partie from "../Partie/Partie";

export default function ToutesLesParties() {
    return (
        <div className={'toutes-les-parties'}>
            <h1>Toutes les parties : </h1>
            <div className={'parties'}>
                <Partie />
                <Partie />
            </div>
        </div>
    );
}