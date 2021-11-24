import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Questions from './pages/Questions';
import Report from './pages/Report';
import Alerts from './components/Alert';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/questions' exact component={Questions} />
        <Route path='/report' exact component={Report} />
        <Route render={() => <Alerts msg={'NotFound'}/> } />
      </Switch>
    </BrowserRouter>
  )
}