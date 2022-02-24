import './App.css';

/**
 * Tre komponenter:
 * Komponent 1: Håller alla förolämpningar i en array
 * Komponent 2: Visar en slumpad förolämpning
 * Komponent 3: Lägger till en ny förolämpning
 * 
 * Komponent 1 - App.js
 * 1. Skapa en array med objekt som håller alla förolämpningar
 * 2. Slumpa en förolämpning och spara i en variabel
 * 3. Skicka den slumpad förolämpning som props till den andra komponenten
 * 
 * Komponent 2 - ShowInsult.js
 * 1. Ta emot via props en slumpad förolämpning
 * 2. Visa den i HTML
 * 
 * Komponent 3 - AddInsult.js
 * Lägg till två inputfält och en knapp
 * Lägg till en eventlistener för varje input och knapp
 * Spara värderna från inputfälten i en variabel
 */

import { useState } from 'react';

import ShowInsult from './components/ShowInsult';
import AddInsult from './components/AddInsult';

function App() {
  const [insults, setInsults] = useState([
    { insult: 'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?', play: 'Macbeth', id: 1 },
    { insult: 'Never hung poison on a fouler toad', play: 'Richard III', id: 2 },
    { insult: 'He thinks too much: such men are dangerous.', play: 'Julius Ceasar', id: 3 },
    { insult: 'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.', play: 'The Merchant of Venice', id: 4 },
    { insult: 'Give me your hand...I can tell your fortune. You are a fool.', play: 'The Two Noble Kinsmen', id: 5 }
  ]);

  const randomPosition = Math.floor(Math.random() * insults.length);
  const randomInsult = insults[randomPosition];

  console.log(randomInsult);

  function addNewInsult(newInsult) {
    newInsult.id = insults.length + 1;
    const newInsultsArray = insults.concat(newInsult);

    setInsults(newInsultsArray);
  }

  const insultComponents = insults.map((insult) => {
    return <ShowInsult insult={ insult.insult } play={ insult.play } 
              key={ insult.id } />
  });

  return (
    <div className="App">
      <ShowInsult insult={ randomInsult.insult } 
        play={ randomInsult.play }  />
      <section>
        <h2>Lägg till en ny förolämpning</h2>
        <AddInsult addNewInsult={ addNewInsult } />
      </section>
      <section>
        <h2>Alla förolämpningar</h2>
        { insultComponents }
      </section>
    </div>
  );
}

export default App;

