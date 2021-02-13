import React,{Component} from 'react';

class GuestGreeting extends Component{

    constructor(props){
        super(props);
        this.props = props
    }

    render(){
        return(
            <div>
                <h1>Please sign up</h1>
                <button onClick={this.props.onclicklogin}>Login</button>
            </div>
        )
    }

}

export default GuestGreeting