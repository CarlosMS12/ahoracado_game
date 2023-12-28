let words: string[] = [
	'COMPUTADORA',
	'PROGRAMA',
	'PROGRAMADOR',
	'MONITOR',
	'COMPUTACION',
	'INFORMATICA',
	'REDES',
	'SISTEMAS',
	'PROGRAMACION',
];

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);

	return words[randomIndex];
}
