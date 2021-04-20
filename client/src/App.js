import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home';
import SignUp from './page/SignUp/SignUp';
import Login from './page/Login/Login';
import Logout from './page/Logout/Logout';
import UserHome from './page/UserHome/UserHome';
import GameSession from './page/GameSession/GameSession';
import Lost from './page/Lost/Lost.jsx';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/:player" component={UserHome} />
        <Route exact path="/game/:session" component={GameSession} />
        <Route component={Lost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
