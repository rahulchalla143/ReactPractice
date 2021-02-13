import React,{Component} from 'react';

class ListOfPlayers extends Component {
    render(){
        return(
            this.props.players.map((item)=>{
                return(
                    <div>
                        <li>Mr. {item.name}<span>{item.score}</span></li>
                    </div>
                )
            }
        ))
    }
}

class FilterBelow70 extends Component{
    render(){
        var players70 = []
        return(
            <div>
            {
                this.props.players.map((item) => {
                    if(item.score<=70)
                    players70.push(item)
                })
            }
            <ListOfPlayers players={players70}/>
            </div>
        )
    }
}

export {ListOfPlayers, FilterBelow70}