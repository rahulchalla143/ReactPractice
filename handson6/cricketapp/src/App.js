import logo from './logo.svg';
import './App.css';
import {OddPlayers,EvenPlayers} from './Component/IndianPlayers';
import {ListOfPlayers,FilterBelow70} from './Component/ListOfPlayers'

function App() {

  const playersInfo=[{name:"Jack",score:50},
  {name:"Michael",score:70},
  {name:"John",score:40},
  {name:"Ann",score:61},
  {name:"Elisabeth",score:61},
  {name:"Sachin",score:95},
  {name:"Dhoni",score:100},
  {name:"Virat",score:84},
  {name:"Jadeja",score:64},
  {name:"Raina",score:75},
  {name:"Rohit",score:80}];

  const IndianTeam=["Sachin","Dhoni","Virat","Jadeja", "Raina","Rohit"];

  var flag=true;

  if(flag === true){
    return(
      <div>
        <h1>List Of Players </h1>
        <ListOfPlayers players={playersInfo}/>
        <hr/>
        <h1>List of Players having Score Less than 70 </h1> 
        <FilterBelow70 players={playersInfo}/>
      </div>
    )
  }
  else{
    return(
      <div>
        <div>
        <h1>Indian Team </h1>
        <h1>Odd Players</h1>
        {OddPlayers(IndianTeam)}
        <hr/>
        <h1>Even Players </h1>
        {EvenPlayers(IndianTeam)}
        </div>
        <div>
          <h1>List of Indain Players Merged: </h1>
          {
            IndianTeam.map((player) =>{
              return(
                <div>
                  <li>Mr. {player}</li>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
