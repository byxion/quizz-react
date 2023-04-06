import React, {useEffect} from "react";
import './QuizzForm.css';
import {ItemQuizz} from "../../types/Quizz/Quizz";
import {ItemQuestion} from "../../types/Question/Question";
import {ItemReponse} from "../../types/Reponse/Reponse";
import {ItemQuizzQuestion} from "../../types/QuizzQuestion/QuizzQuestion";
import {ItemQuestionReponse} from "../../types/QuestionReponse/QuestionReponse";

type QuestionItem = {
    title: string,
    reponses: {
        title: string,
        isTrue: number,
    }[]
}


export default function QuizzForm() {
    const [toutesLesQuestions, setToutesLesQuestions] = React.useState<QuestionItem[]>([]);

    const [titleQuizz, setTitleQuizz] = React.useState("");
    const [titleQuestion, setTitleQuestion] = React.useState("");

    const [titleReponse1, setTitleReponse1] = React.useState("");
    const [isTrue1, setIsTrue1] = React.useState(0);
    const [titleReponse2, setTitleReponse2] = React.useState("");
    const [isTrue2, setIsTrue2] = React.useState(0);
    const [titleReponse3, setTitleReponse3] = React.useState("");
    const [isTrue3, setIsTrue3] = React.useState(0);
    const [titleReponse4, setTitleReponse4] = React.useState("");
    const [isTrue4, setIsTrue4] = React.useState(0);

    const addQuizz = (title: string) => {
        const newItem: ItemQuizz = {
            title,
        };
        fetch("http://localhost:8080/api/quizz/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const addQuestion = (title: string) => {
        const newItem: ItemQuestion = {
            title,
        };
        fetch("http://localhost:8080/api/question/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const addReponse = (title: string, isTrue: number) => {
        const newItem: ItemReponse = {
            title,
            isTrue,
        };
        fetch("http://localhost:8080/api/reponse/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const addQuizzQuestion = (idQuizz: string, idQuestion: string) => {
        const newItem: ItemQuizzQuestion = {
            idQuizz,
            idQuestion,
        }
        fetch("http://localhost:8080/api/quizzquestion/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const addQuestionReponse = (idQuestion: string, idReponse: string) => {
        const newItem: ItemQuestionReponse = {
            idQuestion,
            idReponse,
        }
        fetch("http://localhost:8080/api/questionreponse/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleChangeQuizz = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleQuizz(e.target.value);
    }

    const handleChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleQuestion(e.target.value);
    }

    const handleChangeReponse1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleReponse1(e.target.value);
    }

    const handleChangeIsTrue1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            setIsTrue1(1);
        } else{
            setIsTrue1(0);
        }
    }

    const handleChangeReponse2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleReponse2(e.target.value);
    }

    const handleChangeIsTrue2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            setIsTrue2(1);
        } else{
            setIsTrue2(0);
        }
    }

    const handleChangeReponse3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleReponse3(e.target.value);
    }

    const handleChangeIsTrue3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            setIsTrue3(1);
        } else{
            setIsTrue3(0);
        }
    }

    const handleChangeReponse4 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleReponse4(e.target.value);
    }

    const handleChangeIsTrue4 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            setIsTrue4(1);
        } else{
            setIsTrue4(0);
        }
    }

    const handleClickNouvelleQuestionAvecReponses = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newItemReponse1: ItemReponse = {
            title: titleReponse1,
            isTrue: isTrue1,
        }

        const newItemReponse2: ItemReponse = {
            title: titleReponse2,
            isTrue: isTrue2,
        }

        const newItemReponse3: ItemReponse = {
            title: titleReponse3,
            isTrue: isTrue3,
        }

        const newItemReponse4: ItemReponse = {
            title: titleReponse4,
            isTrue: isTrue4,
        }

        const newItemQuestion: QuestionItem = {
            title: titleQuestion,
            reponses: [newItemReponse1, newItemReponse2, newItemReponse3, newItemReponse4]
        }
        console.log(newItemQuestion)

        setToutesLesQuestions([...toutesLesQuestions, newItemQuestion]);

    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(toutesLesQuestions);

        addQuizz(titleQuizz)
        for (let i = 0; i < toutesLesQuestions.length; i++) {
            const question = toutesLesQuestions[i];
            addQuestion(question.title)
            addQuizzQuestion(titleQuizz, question.title)
            for (let j = 0; j < question.reponses.length; j++) {
                const reponse = question.reponses[j];
                addReponse(reponse.title, reponse.isTrue)
                addQuestionReponse(question.title, reponse.title)
            }
        }
    };

    return (
        <div className={'quizz-form'}>

            <div className={'creer-quizz-form-input'}>
                <div>
                    <label htmlFor={'theme'}>Thème</label>
                    <input type={'text'} id={'theme'} onChange={handleChangeQuizz} />
                </div>

                <div>
                    <label htmlFor={'question'}>Nouvelle question</label>
                    <input type={'text'} id={'question'} onChange={handleChangeQuestion} />
                </div>
                <div>
                    <label htmlFor={'reponse'}>Réponses :</label>
                    <div>
                        <input type={'text'} id={'reponse1'} onChange={handleChangeReponse1}/>
                        <input type={'checkbox'} id={'reponse1bool'} onChange={handleChangeIsTrue1}/>
                    </div>
                    <div>
                        <input type={'text'} id={'reponse2'} onChange={handleChangeReponse2} />
                        <input type={'checkbox'} id={'reponse2bool'} onChangeCapture={handleChangeIsTrue2}/>
                    </div>
                    <div>
                        <input type={'text'} id={'reponse3'} onChange={handleChangeReponse3} />
                        <input type={'checkbox'} id={'reponse3bool'} onChange={handleChangeIsTrue3}/>
                    </div>
                    <div>
                        <input type={'text'} id={'reponse4'} onChange={handleChangeReponse4} />
                        <input type={'checkbox'} id={'reponse4bool'} onChange={handleChangeIsTrue4}/>
                    </div>
                </div>
                <button onClick={handleClickNouvelleQuestionAvecReponses}>Ajouter une question</button>
            </div>
            <div className={'creer-quizz-preview'}>
                <h2>Question du quizz</h2>
                <div className={'creer-quizz-preview-question'}>
                    {

                        toutesLesQuestions.map((itemQuestion: ItemQuestion) => (
                            <div key={itemQuestion.title}>
                                <p>{itemQuestion.title}</p>
                            </div>
                        ))
                    }
                </div>
                <button type={'submit'} onClick={handleSubmit}>Créer le quizz</button>
            </div>
        </div>
    );
}