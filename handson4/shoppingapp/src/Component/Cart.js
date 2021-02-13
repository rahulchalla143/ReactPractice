import React,{Component} from 'react';
class Cart extends Component {
    
    render() {
       return (
           <div className="App">
               <table className="table">
        {
            this.props.item.map((item)=> {
            return (
                <tr>
                    <td>{item.itemname} </td>
                    <td>{item.price} </td>
                </tr>
        
          
            )
        })
    }
              </table>
              </div>
         
    );  
        }
    }
    export default Cart;