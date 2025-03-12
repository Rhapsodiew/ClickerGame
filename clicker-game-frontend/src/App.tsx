import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [score, setScore] = useState(0);

  // Fonction pour obtenir le score depuis le backend
  const fetchScore = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clicker/score');
      setScore(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération du score', error);
    }
  };

  // Fonction pour incrémenter le score
  const handleClick = async () => {
    try {
      const response = await axios.put('http://localhost:3000/clicker/increment');
      setScore(response.data);
    } catch (error) {
      console.error('Erreur lors de l\'incrémentation du score', error);
    }
  };

  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <div className="App">
      <h1>Jeu Clicker</h1>
      <p>Score: {score}</p>
      <button onClick={handleClick}>Cliquez pour augmenter le score</button>
    </div>
  );
}

export default App;
