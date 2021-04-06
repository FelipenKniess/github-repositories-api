import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Repository from './pages/Repository';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/repository/:repository+"component={Repository}></Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
