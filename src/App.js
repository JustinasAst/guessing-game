import React, { useState, useEffect } from 'react';
import './app.css';
import Trivia from './components/trivia/Trivia';

import { data } from './database/data';

function App() {
	const [questionNumber, setQuestionNumber] = useState(1);
	const [stop, setStop] = useState(false);
	const [reach, setReach] = useState('');

	const level = [
		{ id: 1, amount: 'Level' },
		{ id: 2, amount: 'Level' },
		{ id: 3, amount: 'Level' },
		{ id: 4, amount: 'Level' },
		{ id: 5, amount: 'Level' },
		{ id: 6, amount: 'Level' },
		{ id: 7, amount: 'Level' },
		{ id: 8, amount: 'Level' },
		{ id: 9, amount: 'Level' },
		{ id: 10, amount: 'Level' },
		{ id: 11, amount: 'Level' },
		{ id: 12, amount: 'Level' },
		{ id: 13, amount: 'Level' },
		{ id: 14, amount: 'Level' },
		{ id: 15, amount: 'Level' },
	].reverse();

	useEffect(() => {
		questionNumber > 1 && setReach(level.find((m) => m.id === questionNumber - 1).id);
	}, [questionNumber, level]);

	return (
		<div className='app'>
			<div className='main'>
				{stop ? (
					<h1 className='lost'>You reach {reach} level </h1>
				) : (
					<>
						<div className='top'>
							<div className='foto'></div>
						</div>
						<div className='bottom'>
							<Trivia
								data={data}
								setStop={setStop}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
							/>
						</div>
					</>
				)}
			</div>
			<div className='pyramid'>
				<ul className='moneyList'>
					{level.map((money) => (
						<li key={money.id} className={questionNumber === money.id ? 'moneyListItem  active' : 'moneyListItem'}>
							<span className='moneyListItemNumber'>{money.id}</span>
							<span className='moneyListItemAmount'>{money.amount}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
