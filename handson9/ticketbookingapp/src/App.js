import logo from './logo.svg';
import './App.css';
import UserGreeting from './Component/UserGreeting';
import GuestGreeting from './Component/GuestGreeting'
import { Component } from 'react';

var flag = false

class App extends Component{

  constructor(){
    super()
    this.onclicklogin = this.onclicklogin.bind(this)
    this.onclicklogout = this.onclicklogout.bind(this)
    this.state = {
      loggedin : false,
      element : GuestGreeting
    }
  }

  
  onclicklogout = ()=>{
    console.log("!!!!!!!")
    this.setState({loggedin:false,element:GuestGreeting})
  }
  
  onclicklogin = ()=>{
    console.log("!!!!!!!")
    this.setState({loggedin:true,element:UserGreeting})
  }
  
  
  render() {
    if(this.state.loggedin){
      return (
      <div className="App">
        <this.state.element onclicklogout={this.onclicklogout}/>
      </div>
    );
    }
    else{
      return (
        <div className="App">
          <this.state.element onclicklogin={this.onclicklogin}/>
        </div>
      );
    }
  }
}


export default App;
