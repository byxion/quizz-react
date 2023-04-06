import React from "react";
import './Historique.css';
import ToutesLesParties from "./ToutesLesParties/ToutesLesParties";

export default function Historique() {
    return (
        <div className={'historique'}>
            <h1>Historique</h1>
            <ToutesLesParties />
        </div>
    );
}