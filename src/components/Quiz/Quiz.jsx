import React, { useState } from 'react';
import harryPotterQuestions from '../../assets/Questions';
import './Quiz.css';

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [lock, setLock] = useState(false); // Prevents multiple selections
	const [selectedOption, setSelectedOption] = useState(null); // Tracks selected option

	function checkAns(option) {
		if (!lock) {
			setSelectedOption(option.text);
			setLock(true);
			if (option.text === answer) {
				setScore((prevScore) => prevScore + 1);
			}
		}
	}

	function nextQuestion() {
		setCurrentQuestion((prev) => prev + 1);
		setLock(false);
		setSelectedOption(null);
	}

	function restartQuiz() {
		setCurrentQuestion(0);
		setScore(0);
		setLock(false);
		setSelectedOption(null);
	}

	const { question, options, answer } = harryPotterQuestions[currentQuestion];

	return (
		<div className="container">
			<h1>Quiz App</h1>
			<hr />
			{currentQuestion < harryPotterQuestions.length - 1 ? (
				<>
					<h2>
						{currentQuestion + 1}. {question}
					</h2>
					<ul>
						{options.map((option) => (
							<li
								key={option.id}
								className={(() => {
									if (!selectedOption) return ''; // No option selected yet

									// Check if the current option is the correct answer
									if (option.text === answer) return 'correct';

									// Check if the current option is the selected answer (wrong one)
									if (option.text === selectedOption) return 'wrong';

									// Return empty string if neither condition is met
									return '';
								})()}
								onClick={() => checkAns(option)}
							>
								{option.text}
							</li>
						))}
					</ul>
					<button onClick={nextQuestion} disabled={!lock}>
						Next
					</button>
					<div className="index">
						{currentQuestion + 1} of {harryPotterQuestions.length} Questions
					</div>
				</>
			) : (
				<>
					<h2>
						Your final score is: {score}/{harryPotterQuestions.length}
					</h2>
					<button onClick={restartQuiz}>Restart</button>
				</>
			)}
		</div>
	);
}

export default Quiz;
