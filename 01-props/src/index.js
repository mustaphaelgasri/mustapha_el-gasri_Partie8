import React from 'react';
import ReactDOM from 'react-dom/client';
import Presentation from './components/Presentation';
import PresentationClasse from './components/PresentationClasse';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const personne1 = { nom: "Rami", prenom: "Ahmed" };
  const array = ["Bac", "Licence", "Master"];

  return (
    <div>
      <Presentation personne={personne1} diplomes={array}>
        Ce ci est un children props
      </Presentation>
      
      <hr />
      
      <PresentationClasse personne={personne1} diplomes={array}>
        Ceci est un children pour la classe
      </PresentationClasse>
    </div>
  );
}

root.render(<App />);