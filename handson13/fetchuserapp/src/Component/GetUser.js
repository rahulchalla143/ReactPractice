import {React,Component} from "react";

class GetUser extends Component{

    constructor(){
        super()
        this.state={
            person:{},
            loading:true
        }
    }

    async componentDidMount(){
        const url="https://api.randomuser.me/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({person:data.results[0],loading:false})
        console.log(data.results[0])
    }

    render(){
        if(!this.state.loading){
            return(
                <div>
                    <h1>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</h1>
                    <img src={this.state.person.picture.medium}/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
    }

}

export default GetUser