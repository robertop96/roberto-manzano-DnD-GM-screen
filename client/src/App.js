import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home';
import Sign from './page/Sign/Sign';
import UserHome from './page/UserHome/UserHome';
import GameSession from './page/GameSession/GameSession';
import CharacterSheet from './page/CharacterSheet/CharacterSheet';
import Lost from './page/Lost/Lost.jsx';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign/:action" component={Sign} />
        <Route exact path="/:player" component={UserHome} />
        <Route exact path="/:player/create" component={CharacterSheet} />
        <Route exact path="/game/:session" component={GameSession} />
        <Route component={Lost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
