import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
