import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Creer from "./pages/Creer/Creer";
import Jouer from "./pages/Jouer/Jouer";
import Historique from "./pages/Historique/Historique";
import ModifierQuizz from "./pages/Creer/ModifierQuizz/ModifierQuizz";
import Resultats from "./pages/Jouer/Resultats/Resultats";


function App() {
  return (
      <BrowserRouter>
        <div className={'navigation'}>
            <div>Kwiz</div>
            <div className={'navigation-link'}>
              <NavLink to={'/'}>Jouer</NavLink>
              <NavLink to={'/creer'}>Créer un quizz</NavLink>
              <NavLink to={'/historique'}>Historique</NavLink>
            </div>
        </div>
        <Routes>
          <Route path={'/'} element={<Jouer />} />
            <Route path={'/:id'} element={<Resultats />} />
          <Route path={'/creer'} element={<Creer />} />
            <Route path={'/creer/:id'} element={<ModifierQuizz />} />
          <Route path={'/historique'} element={<Historique />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
