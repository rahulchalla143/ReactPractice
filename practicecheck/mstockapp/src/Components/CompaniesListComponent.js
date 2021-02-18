import React,{useState} from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import {Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import MenuComponent from './MenuComponent'


function CompaniesListComponent(props){

    const userId = props.location.state.userId

    const [CompanyList,setCompanyList] = useState([])
    axios.get("http://localhost:8080/companies").then((res)=>{
        setCompanyList(res.data)
    })
    var CompanyDetailsList = []
    console.log(CompanyList)
    CompanyList.map((company)=>{
        console.log(company)
        CompanyDetailsList.push(<CompanyDetailsComponent watch={false} userId={userId} companyId={company.companyId} companyName={company.companyName} description={company.description} price={company.currentStockPrice}/>)
    })

    
    return(
        <div>
            <MenuComponent userId={userId}/>
            <Container>
                <Row>
                {CompanyDetailsList}
                </Row>
            </Container>
        </div>
    )
}

export default CompaniesListComponent