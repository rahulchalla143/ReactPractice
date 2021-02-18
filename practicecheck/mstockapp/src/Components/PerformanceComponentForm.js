import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import PerformanceComponent from './PerformanceComponent';
import MenuComponent from './MenuComponent';


export default class PerformanceComponentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {   
          companyCode1:0 ,
          companyCode2: 0,
          from:"",
          to:"",
          flag:false,
          isLoggedIn:true
          
        };
        this.userId = props.location.state.userId
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }


      handleChange(event){
          this.setState({[event.target.name]:event.target.value});
          console.log([event.target.name]);
      }

      handleChangecom1=(event)=> {
        //this.setState({value: event.target.value});
        this.setState({  companyCode1: parseInt(event.target.value, 10)});
        console.log(this.state.companyCode1);
      }
      handleChangecom2=(event)=> {
        //this.setState({value: event.target.value});
        this.setState({  companyCode2: parseInt(event.target.value, 10)});
        console.log(this.state.companyCode2);
      }
    
      handleSubmit(event) {
          event.preventDefault();
          console.log("event.target.value");
          this.setState({flag:true});
            // <PerformanceComponent companyCode1={this.state.companyCode1} companyCode2={this.state.companyCode2} from={this.state.from} to={this.state.to} isLoggedIn={this.state.isLoggedIn}/>
      }

        render(){
            return(
                <div>
                    <MenuComponent userId={this.userId}/>
                    <div className="mx-5 container">
         
         <form onSubmit={this.handleSubmit}>
         <div  className='form-row'>
         <div className="form-group text-left col-12">
         <h1 >Compare potential companies</h1>
         <h2 className="text-muted">Make smart investment decision</h2>
         </div>
         </div>
         <div className="form-row">
             <div className="form-group text-left col-6">
             
            <label>Select company 1</label>
            <select name="company1"  className="form-control"  onChange={this.handleChangecom1}>
            <option value="0">choose..</option>
             <option value="1">BITCOIN(BTC)</option>
            <option value="2">ETHEREUM(ETH)</option>
            <option value="3">RIPPLE(XRP)</option>
            <option value="4">WIPRO</option>
            </select>
                </div>
                <div className="form-group text-left col-6">
            <label>Select company 2</label>
            <select name="company2" className="form-control"  onChange={this.handleChangecom2}>
            <option value="0">choose..</option>
             <option value="1">BITCOIN(BTC)</option>
            <option value="2">ETHEREUM(ETH)</option>
            <option value="3">RIPPLE(XRP)</option>
            <option value="4">WIPRO</option>
            </select>
            </div>
            </div>
            <div className="form-row">
            <div className="form-group text-left col-6">
                <label htmlFor="fromdate">From Date</label>
                <input type="text" name = "from"  id="fromdate" className="form-control" value={this.state.from} onChange={this.handleChange}/>
                {/* className="form-control"  */}
            </div>
            <div className="form-group text-left col-6">
                <label htmlFor="todate">To Date</label>
                <input type="text" name = "to"  id="todate" className="form-control" value={this.state.to} onChange={this.handleChange}/>
                {/* className="form-control"  */}
            </div>
            </div>
            <div className="form-row">                 
            <div className="form-group text-left col-4">
                
                <button type="submit" className="btn btn-primary">Fetch Details</button> 
            </div>
                </div>
         </form>
         {this.state.flag==true && <PerformanceComponent companyCode1={this.state.companyCode1} companyCode2={this.state.companyCode2} from={this.state.from} to={this.state.to} isLoggedIn={this.state.isLoggedIn}/>}
          </div>
                
         
          </div>

            )
        }
}