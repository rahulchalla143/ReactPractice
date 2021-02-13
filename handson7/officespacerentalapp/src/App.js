import logo from './logo.svg';
import './App.css';
import imagesource from './Images/download.jpg';

function App() {
  {
    var color = "red"
    const element = "Office Space"
    const jsxatt = <img src={imagesource} width="25%" height="25%" alt="Office Space"/>
    const itemName = {Name:'DBS', Rent:50000, Address:'Chennai'}
    if(itemName.Rent>60000){color="green"}
    return(
      <div>
        <h1>{element}, at Affordable Range</h1>
        {jsxatt}
        <h1>Name: {itemName.Name}</h1>
        <h1 style={{color:color}}>Rent: {itemName.Rent}</h1>
        <h1>Address: {itemName.Address}</h1>
      </div>
    )
  }
}

export default App;
