import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./App.css";
function App() {

  const [input, setInput] = useState("")

  function hendleSearch() {
    if (input === "") {
      alert("digite um cep.")
      return
    }

    try {
      
    } catch (error) {
      
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

      <main className="main">
        <h2>CEP: 54420200</h2>
        <span>Rua:</span>
        <span>Complemento:</span>
        <span>Vila ROsa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  )
}

export default App
