import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import MenuComponent from './Components/MenuComponent'
import CompanyDetailsComponent from './Components/CompanyDetailsComponent'
import CompaniesListComponent from './Components/CompaniesListComponent'
import LoginComponent from './Components/LoginComponent';
import WatchListComponent from './Components/WatchListComponent'
import PerformanceComponent from './Components/PerformanceComponent';

function App() {
  return (

    <BrowserRouter>
      <div>
        <MenuComponent loggedIn={true}/>
        <Switch>
          <Route path="/login" component={LoginComponent} exact={true}/>
          <Route path="/companies" component={CompaniesListComponent}/>
          <Route path="/watchlist" component={WatchListComponent}/>
          <Route path="/compareperformance" component={PerformanceComponent}/>
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;
