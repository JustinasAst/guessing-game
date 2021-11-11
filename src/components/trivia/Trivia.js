import React, { useState, useEffect } from 'react';
import * as S from './StyledTrivia';

const Trivia = ({ data, setStop, questionNumber, setQuestionNumber }) => {
	const [question, setQestion] = useState(null);
	const [selectAnswer, setSelectAnswer] = useState(null);
	const [className, setClassName] = useState('answer');

	useEffect(() => {
		setQestion(data[questionNumber - 1]);
	}, [data, questionNumber]);

	const delay = (laikas, collback) => {
		setTimeout(() => {
			collback();
		}, laikas);
	};

	const handleClick = (a) => {
		setSelectAnswer(a);
		setClassName('answer active');
		delay(3000, () => {
			setClassName(a.correct ? 'answer correct' : 'answer wrong');
		});
		delay(6000, () => {
			if (a.correct) {
				setQuestionNumber((Q) => Q + 1);
				setSelectAnswer(null);
			} else {
				setStop(true);
			}
		});
	};
	return (
		<S.Trivia>
			<div className='question'> {question?.question} </div>
			<div className='answers'>
				{question?.answers.map((a) => (
					<S.Answer key={a.id} className={selectAnswer === a ? className : S.Answer} onClick={() => handleClick(a)}>
						{a.text}
					</S.Answer>
				))}
			</div>
		</S.Trivia>
	);
};

export default Trivia;
