import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import axios from "axios";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const createUser = async (username: string, password: string, email: string) => {
    const response = await axios.post("http://localhost:3000/users", {
      "username": username,
      "password": password,
      "email": email
    });
    console.log(response)
    return response.data
  };

  const loginUser = async (username: string, password: string) => {
    try {
        const response = await axios.post("http://localhost:3000/auth/login", {
            "username": username,
            "password": password
        });

        console.log("Réponse du serveur:", response.data);

        if (response.data && response.data.access_token) {
            localStorage.setItem("token", response.data.access_token);
            console.log("Token enregistré, redirection...");
            navigate("/");
        } else {
            console.log("Pas de token reçu");
        }
    } catch (err) {
        console.error("Erreur de connexion:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isRegister) {
      const userCreated = await createUser(username, password, email);
      if (userCreated) {
        await loginUser(username, password);
      } else {
        setError("Échec de l'inscription");
      }
    } else {
      await loginUser(username, password);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isRegister ? "Inscription" : "Connexion"}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {isRegister ? "S'inscrire" : "Se connecter"}
          </button>
        </form>
        <p>
          {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"} 
          <button className="switch-button" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Se connecter" : "S'inscrire"}
          </button>
        </p>
      </div>
    </div>
  );
}
