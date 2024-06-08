import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";
import "./App.css";
function App() {

  const [input, setInput] = useState("")
  const [cep, setCep] = useState({})

  async function hendleSearch() {
    if (input === "") {
      alert("digite um cep.")
      return
    }

    try {
      const response = await api.get(`${input}/json`);

      setCep(response.data)
      setInput("")

    } catch (error) {

      alert("Erro ao buscar cep. ");
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP:</h1>
      <div className="container-input">
        <input 
        type="text" 
        placeholder="Digite seu cep..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        />

        <button 
        className="button-search"
        onClick={hendleSearch}
        >
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.complemento === "" ? "Sem comlpemento" : `Complemento: ${cep.complemento}`}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
      
    </div>
  )
}

export default App
