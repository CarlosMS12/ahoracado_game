import {useState} from 'react';
import {letters} from './helpers/letters';
import {HangImage} from './components/HangImage';
import './App.css';

function App() {
	const [attempts, setAttempts] = useState(0);

	const checkLetter = (letter: string) => {
		console.log(letter);
		setAttempts(Math.min(attempts + 1, 9));
	};
	return (
		<div className="App">
			{/* Imégenes */}
			<HangImage imageNumber={attempts} />

			{/* Palabra oculta */}
			<h3>_ _ _ _ _ _ _ _ _ _</h3>

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
