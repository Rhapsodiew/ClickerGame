import React, { useState, useEffect } from 'react';
import './App.css'
import { IUser } from './shared/interface';
import { decrementScore, getUser, incrementAutoClick, incrementClick, incrementScore } from './services/User/UserService';

function App() {
  const [score, setScore] = useState(0);
  const [currentUser, setCurrentUser] = useState<IUser>({
    id: 0,
    username: '',
    password: '',
    email: '',
    score: 0,
    nb_per_click: 1,
    auto_clicker: 0
  });

  const [nbClick, setNbClick] = useState(currentUser.nb_per_click);
  const [autoClicker, setAutoClicker] = useState(currentUser.auto_clicker);

  // Chargement Donnée Utilisateur
  useEffect(() => {
  getUser(2).then((response) => {
    setCurrentUser(response);
    })
  }, []);

  // Observer currentUser pour voir les mises à jour
  useEffect(() => {
    console.log(currentUser);
    setAutoClicker(currentUser.auto_clicker);
    setNbClick(currentUser.nb_per_click);
  }, [currentUser]); // Exécuter ce useEffect quand currentUser change

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentUser.auto_clicker > 0) {
        incrementScore(currentUser.id, autoClicker).then((response) => {
          setScore(response.score);
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [nbClick, autoClicker, currentUser]);

  const [improvements, setImprovements] = useState([
    { id: 1, name: 'Clicker +2', cost: 1000, effect: (id: number) => incrementClick(id, 2).then((response) => setNbClick(response.nb_per_click))},
    { id: 2, name: 'Autoclicker', cost: 2000, effect: (id: number) => incrementAutoClick(id, 1).then((response) => setAutoClicker(response.auto_clicker))},
  ]);

  // Fonction pour incrémenter le score
  const handleClick = async () => {
    try {
      incrementScore(currentUser.id, currentUser.nb_per_click).then((response) => {
        setScore(response.score);
      })
    } catch (error) {
      console.error('Erreur lors de l\'incrémentation du score', error);
    }
  };

  const handleBuyImprovement = (improvement: any) => {
    if (score >= improvement.cost) {
      decrementScore(currentUser.id, improvement.cost).then((response) => {
        setScore(response.score);
      })
      improvement.effect(currentUser.id);
    } else {
      alert('Pas assez de points!');
    }
  };


  return (
    <div className="App">
      <div className="Page">
        <div className="container">
          {/* Colonne principale */}
          <div className="clicker-col">
            <h1>ClickerGame</h1>
            <p>Score: {score}</p>
            <button onClick={handleClick}>Cliquez pour gagner des points</button>
            <p>Click: {nbClick}</p>
            <p>Autoclicker: {autoClicker}</p>
          </div>

          {/* Colonne des améliorations */}
          <div className="improvements-col">
            <h2>Améliorations</h2>
            {improvements.map((improvement) => (
              <div key={improvement.id} className="improvement-item">
                <p>{improvement.name}</p>
                <p>Coût: {improvement.cost} points</p>
                <button onClick={() => handleBuyImprovement(improvement)}>
                  Acheter
                </button>
              </div>
            ))}
          </div>

          {/* Colonne annexe */}
          <div className="modules-col">
            <h2>Modules</h2>
            <div>
              <p>Chronomètre: {new Date().toLocaleTimeString()}</p>
            </div>
            <div>
              <p>Meilleurs scores:</p>
              <ul>
                <li>Joueur 1: 5000</li>
                <li>Joueur 2: 3000</li>
                <li>Joueur 3: 2000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
