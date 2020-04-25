import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Body from './components/Body';
import './styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Body} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
