import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {AuthProvider} from "./context/Auth";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

function App() {
  return (
      <AuthProvider>
      <Router>
        <PrivateRoute exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
      </Router>
      </AuthProvider>
  );
}

export default App;
