import React,{useState} from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import {Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import MenuComponent from './MenuComponent'

// axios.defaults.headers.get['Access-Control-Allow-Credentials']='*'

function WatchListComponent(props){

    var userId;
    try{
        userId = props.location.state.userId;
        console.log("UserIDDDDDDDDDDDDdd"+JSON.stringify(props))
    }
    catch(e){
        userId = props.userId;
    }
   
    const [CompanyList,setCompanyList] = useState([])
    axios.get("http://localhost:8080/watchList/"+userId).then((res)=>{
        setCompanyList(res.data)
        console.log(res)
    })
    var CompanyDetailsList = []
    CompanyList.map((company)=>{
        CompanyDetailsList.push(<CompanyDetailsComponent onClick={()=>{
            alert("Removed from List Successfully!")

        }} userId={userId} watch={true} companyName={company.company.companyName} description={company.company.description} price={company.company.currentStockPrice}/>)
    })




    if(CompanyList.length==0){
        return(
            <div>
                <MenuComponent userId={userId}/>
                <h2>My Companies List</h2>
                <h3>No Company Stock Prices added to Stock List</h3>
            </div>
        )
    }
    else{

        return(
            <div>
                <MenuComponent userId = {userId}/>
                <Container>
                    <Row>
                        {CompanyDetailsList}
                    </Row>
                </Container>

            </div>
        )
    }
}

export default WatchListComponent