import React,{Component} from 'react';

class UserGreeting extends Component{

    constructor(props){
        super(props);
        this.props = props
    }

    render(){
        return(
            <div>
                <h1>Welcome Back</h1>
                <button onClick={this.props.onclicklogout}>Logout</button>
            </div>
        )
    }

}

export default UserGreeting