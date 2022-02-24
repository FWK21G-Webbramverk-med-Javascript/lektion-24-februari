import './App.css';
import { useState } from 'react'; // Vi behöver importera useState-hooken från react-biblioteket

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function increase() {
    setCounter((oldCounter) => {
      console.log('Old value:', oldCounter); // Hämta nuvarande värde
      oldCounter++; // Öka med 1
      return oldCounter; // Returnera det och uppdatera värde
    });
  }

  function handleKeyUp(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <button onClick={ increase }>Öka med 1</button>
      <p>Räknare: { counter }</p>

      <input type="text" onKeyUp={ handleKeyUp } />
      <p>Namm: { name }</p>
    </div>
  );
}

export default App;
