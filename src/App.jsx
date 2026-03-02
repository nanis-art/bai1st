import { useState, useEffect } from 'react';
import './App.css';
import LetterForm from './components/LetterForm';
import LetterList from './components/LetterList';

function App() {
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    console.log("App mounted - lần render đầu tiên");
  }, []);
  useEffect(() => {
    console.log("Letters updated:", letters);
  }, [letters]);

  const addLetter = (content) => {
    setLetters([
      ...letters,
      {
        id: Date.now(),
        content,
      },
    ]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Letter Box</h1>
      <div className="form-section">
        <LetterForm onAdd={addLetter} />
      </div>
      <hr className="divider" />
      <div className="list-section">
        <LetterList letters={letters} />
      </div>
    </div>
  );
}

export default App;