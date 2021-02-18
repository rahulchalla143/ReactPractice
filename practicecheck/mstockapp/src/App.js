import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import MenuComponent from './Components/MenuComponent'
import CompanyDetailsComponent from './Components/CompanyDetailsComponent'
import CompaniesListComponent from './Components/CompaniesListComponent'
import LoginComponent from './Components/LoginComponent';
import WatchListComponent from './Components/WatchListComponent'
import PerformanceComponentForm from './Components/PerformanceComponentForm.js';
import {useState} from 'react';

function App(props) {

  return (


    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={LoginComponent} exact={true}/>
          <Route path="/companies" component={CompaniesListComponent}/>
          <Route path="/watchlist" component={WatchListComponent}/>
          <Route path="/compareperformance" component={PerformanceComponentForm}/>
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;
