const harryPotterQuestions = [
	{
		id: crypto.randomUUID(),
		question: "What is the name of Harry Potter's owl?",
		options: [
			{ id: crypto.randomUUID(), text: 'Hedwig' },
			{ id: crypto.randomUUID(), text: 'Errol' },
			{ id: crypto.randomUUID(), text: 'Fawkes' },
			{ id: crypto.randomUUID(), text: 'Pigwidgeon' },
		],
		answer: 'Hedwig',
	},
	{
		id: crypto.randomUUID(),
		question: "What is the name of Harry Potter's best friend?",
		options: [
			{ id: crypto.randomUUID(), text: 'Ron Weasley' },
			{ id: crypto.randomUUID(), text: 'Draco Malfoy' },
			{ id: crypto.randomUUID(), text: 'Neville Longbottom' },
			{ id: crypto.randomUUID(), text: 'Severus Snape' },
		],
		answer: 'Ron Weasley',
	},
	{
		id: crypto.randomUUID(),
		question:
			"Who is the headmaster of Hogwarts during Harry Potter's time at school?",
		options: [
			{ id: crypto.randomUUID(), text: 'Albus Dumbledore' },
			{ id: crypto.randomUUID(), text: 'Minerva McGonagall' },
			{ id: crypto.randomUUID(), text: 'Severus Snape' },
			{ id: crypto.randomUUID(), text: 'Filius Flitwick' },
		],
		answer: 'Albus Dumbledore',
	},
	{
		id: crypto.randomUUID(),
		question: "What is the name of the dark wizard who killed Harry's parents?",
		options: [
			{ id: crypto.randomUUID(), text: 'Tom Riddle' },
			{ id: crypto.randomUUID(), text: 'Voldemort' },
			{ id: crypto.randomUUID(), text: 'Lucius Malfoy' },
			{ id: crypto.randomUUID(), text: 'Bellatrix Lestrange' },
		],
		answer: 'Voldemort',
	},
	{
		id: crypto.randomUUID(),
		question: 'What is the spell used to disarm an opponent?',
		options: [
			{ id: crypto.randomUUID(), text: 'Expelliarmus' },
			{ id: crypto.randomUUID(), text: 'Avada Kedavra' },
			{ id: crypto.randomUUID(), text: 'Lumos' },
			{ id: crypto.randomUUID(), text: 'Wingardium Leviosa' },
		],
		answer: 'Expelliarmus',
	},
	{
		id: crypto.randomUUID(),
		question: 'Which of the following is not a Hogwarts House?',
		options: [
			{ id: crypto.randomUUID(), text: 'Ravenclaw' },
			{ id: crypto.randomUUID(), text: 'Gryffindor' },
			{ id: crypto.randomUUID(), text: 'Slytherin' },
			{ id: crypto.randomUUID(), text: 'Puffindor' },
		],
		answer: 'Puffindor',
	},
	{
		id: crypto.randomUUID(),
		question: 'What is the name of the giant spider in the Forbidden Forest?',
		options: [
			{ id: crypto.randomUUID(), text: 'Aragog' },
			{ id: crypto.randomUUID(), text: 'Shelob' },
			{ id: crypto.randomUUID(), text: 'Arachne' },
			{ id: crypto.randomUUID(), text: 'Scorpius' },
		],
		answer: 'Aragog',
	},
	{
		id: crypto.randomUUID(),
		question:
			'Which magical creature is known for guarding the vaults in Gringotts?',
		options: [
			{ id: crypto.randomUUID(), text: 'Dragon' },
			{ id: crypto.randomUUID(), text: 'Hippogriff' },
			{ id: crypto.randomUUID(), text: 'Thestral' },
			{ id: crypto.randomUUID(), text: 'Troll' },
		],
		answer: 'Dragon',
	},
	{
		id: crypto.randomUUID(),
		question: 'What position does Harry Potter play on his Quidditch team?',
		options: [
			{ id: crypto.randomUUID(), text: 'Seeker' },
			{ id: crypto.randomUUID(), text: 'Chaser' },
			{ id: crypto.randomUUID(), text: 'Beater' },
			{ id: crypto.randomUUID(), text: 'Keeper' },
		],
		answer: 'Seeker',
	},
	{
		id: crypto.randomUUID(),
		question: 'Who was the Half-Blood Prince?',
		options: [
			{ id: crypto.randomUUID(), text: 'Severus Snape' },
			{ id: crypto.randomUUID(), text: 'Tom Riddle' },
			{ id: crypto.randomUUID(), text: 'Harry Potter' },
			{ id: crypto.randomUUID(), text: 'Lucius Malfoy' },
		],
		answer: 'Severus Snape',
	},
];

export default harryPotterQuestions;
