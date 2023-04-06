import React from "react";
import './Question.css';

type QuestionItemProps = {
    item: {
        id: number,
        title: string,
    }
}

export default function Question(props: QuestionItemProps) {
    const {item} = props;
    return (
        <div className={'question'}>
            <h3>{item.title}</h3>
        </div>
    );
}