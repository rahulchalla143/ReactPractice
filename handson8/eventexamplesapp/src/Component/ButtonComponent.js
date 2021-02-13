import React,{Component} from 'react';



class ButtonComponent extends Component{
    
    // class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.clickMe = this.clickMe.bind(this);
  }

  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  clickMe(e) {
   alert("I am Clicked");
  };

  // change code above this line
  render() {
    return (

   <div>
    <h3>{this.state.count}</h3>
    <button onClick={()=>{this.increment();alert("Hello! Member!")}}>Increment</button>
    <br/>
    <button onClick={ this.decrement}>Decrement</button>
    <br/>
    <button value="Rahul" onClick={(e) => alert("welcome! "+e.target.value)}>Say Welcome</button>
    <br/>
    <button onClick={this.clickMe}>Click on Me</button>
  </div>
    );
  }

}

export default ButtonComponent