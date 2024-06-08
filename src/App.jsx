import { FiSearch } from "react-icons/fi";
import "./App.css";
function App() {

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP:</h1>
      <div className="container-input">
        <input 
        type="text" 
        placeholder="Digite seu cep..."
        />

        <button className="button-search">
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
