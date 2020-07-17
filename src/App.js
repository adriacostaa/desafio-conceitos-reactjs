import React from "react";

import "./styles.css";
import { useEffect, useState} from "react";
import api from "./services/api";

function App() {
  const [repositories, setRespositories] =  useState([]);

  useEffect(()=>{
      api.get('repositories').then(response => {
        setRespositories(response.data);
      })
  }, []);
  async function handleAddRepository() {
      const response = await api.post('repositories', {
        title: 'Repositorios Novos',
        url: "https://github.com",
        techs: ['js', 'react']
      });
      const repository = response.data;
      setRespositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map(repository => (
          <li key={repository.id}>{repository.title}
            <button onClick={() => handleRemoveRepository(1)}>
            Remover
            </button>

          </li>))}
      </ul>

      <button type = "button" onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
