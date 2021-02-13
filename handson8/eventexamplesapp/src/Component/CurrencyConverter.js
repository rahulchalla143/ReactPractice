import React,{Component} from 'react';

class CurrencyConverter extends Component{

    constructor(){
        super();
        this.state={
            value:80
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(){
        alert("Converting into Euro Amount is "+(this.state.value*80))
    }

    render(){
        return(
        <div>
            <h1 style={{color:"green"}}>Currency Converter!!!</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                Amount :
                <input type="number" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                Currency :
                <input readOnly type="text" value="Euro"/>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }

}

export default CurrencyConverter;