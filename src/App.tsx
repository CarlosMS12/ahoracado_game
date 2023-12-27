import {useState} from 'react';
import {letters} from './helpers/letters';
import {HangImage} from './components/HangImage';
import './App.css';

function App() {
	const [word] = useState('COMPUTADORA');
	const [hiddenWord] = useState('_ '.repeat(word.length));
	const [attempts, setAttempts] = useState(0);

	const checkLetter = (letter: string) => {
		if (!word.includes(letter)) {
			setAttempts(Math.min(attempts + 1, 9));
			return;
		}

		
	};
	return (
		<div className="App">
			{/* Imégenes */}
			<HangImage imageNumber={attempts} />

			{/* Palabra oculta */}
			<h3>{hiddenWord}</h3>

			{/* Contador de intentos */}
			<h3>Intentos: {attempts}</h3>

			{/* Botones de letras */}
			{letters.map((letter) => (
				<button onClick={() => checkLetter(letter)} key={letter}>
					{letter}
				</button>
			))}
		</div>
	);
}

export default App;
