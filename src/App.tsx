import {useEffect, useState} from 'react';
import {letters} from './helpers/letters';
import {HangImage} from './components/HangImage';
import {getRandomWord} from './helpers/getRandomWord';
import './App.css';

function App() {
	const [word, setWord] = useState(getRandomWord());
	const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
	const [attempts, setAttempts] = useState(0);
	const [lose, setLose] = useState(false);
	const [won, setWon] = useState(false);

	// Determinar si la persona ha perdido
	useEffect(() => {
		if (attempts >= 9) {
			setLose(true);
		}
	});

	// Determinar si la persona ha ganado
	useEffect(() => {
		const currentHiddenWord = hiddenWord.split(' ').join('');
		if (currentHiddenWord === word) {
			setWon(true);
		}
	});

	const checkLetter = (letter: string) => {
		if (lose) return;
		if (won) return;

		if (!word.includes(letter)) {
			setAttempts(Math.min(attempts + 1, 9));
			return;
		}

		const hiddenWordArray = hiddenWord.split(' ');

		for (let i = 0; i < word.length; i++) {
			if (word[i] === letter) {
				hiddenWordArray[i] = letter;
			}
		}
		setHiddenWord(hiddenWordArray.join(' '));
	};

	const newGame = () => {
		const newWord = getRandomWord();
		setWord(newWord);
		setHiddenWord('_ '.repeat(newWord.length));
		setLose(false);
		setWon(false);
		setAttempts(0);
	};

	return (
		<div className="App container">
			<div>
				{/* Imégenes */}
				<picture className='hang-image'>
					<HangImage imageNumber={attempts} />
				</picture>
				{/* Palabra oculta */}
				<h3 className="hidden">{hiddenWord}</h3>
				{/* Contador de intentos */}
				<h3>Intentos: {attempts}</h3>
				{/* Mensaje de derrota */}
				{lose ? (
					<h2>
						Perdiste <br /> La palabra correcta era: {word}
					</h2>
				) : (
					''
				)}
				{/* Mensaje de victoria */}
				{won ? <h2>Felicidades, Ganaste</h2> : ''}
			</div>
			<div className='buttons'>
				<img className='hang' src="../src/assets/hangman.png" alt="hangman" />
				{/* Botones de letras */}
				{letters.map((letter) => (
					<button onClick={() => checkLetter(letter)} key={letter}>
						{letter}
					</button>
				))}
				<br /> <br />
				<button className="new" onClick={newGame}>
					¿New Game?
				</button>
			</div>
		</div>
	);
}

export default App;
