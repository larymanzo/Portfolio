import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import BoasVindas from './pages/BoasVindas';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Index } />
        <Route path="/boas-vindas" component={ BoasVindas } />
        <Route path="/sobre" component={ Sobre } />
        <Route path="/projetos" component={ Projetos } />
        <Route path="/contato" component={ Contato } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
