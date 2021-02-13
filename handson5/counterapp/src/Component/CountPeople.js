import React,{Component} from 'react';

class CountPeople extends Component{
    constructor(){
        super();
        this.state={
            entrycount:0,
            exitcount:0,
            c:0
        };
    }

    updateEntry(){
        this.setState((prevState,props)=>{
            return { entrycount: prevState.entrycount+1}
        });
    }

    updateExit(){
        this.setState((prevState,props)=>{
            return { exitcount: prevState.exitcount+1}
        });
    }

    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <span className="entry">
                    <button onClick={this.updateEntry.bind(this)}>Login</button>
                    <label>{this.state.entrycount} people Entered !</label>
                </span>
                <br></br>
                <br></br>
                <br></br>
                <span className="exit">
                    <button onClick={this.updateExit.bind(this)}>Exit</button>
                    <label>{this.state.exitcount} people Left !</label>
                </span>
            </div>
        )
    }
}

export default CountPeople;