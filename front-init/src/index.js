import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Composants
import App from 'src/components/App';

// == Render
// Élément React racine (celui qui contient l'ensemble de l'app)
// => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
