let words: string[] = [
	'COMPUTADORA',
	'PROGRAMA',
	'PROGRAMADOR',
	'MONITOR',
	'COMPUTACIÓN',
	'INFORMATICA',
	'REDES',
	'SISTEMAS',
	'PROGRAMACIÓN',
];

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);

	return words[randomIndex];
}
