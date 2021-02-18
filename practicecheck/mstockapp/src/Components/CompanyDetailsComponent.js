import React,{Component} from 'react';
import {Row,Card,Col} from 'react-bootstrap';
import axios from 'axios';

function CompanyDetailsComponent(props){
    if(!(props.userId==0)){
        if(props.watch){
            return(
                <Col lg={4}>
                    <Card className="m-3">
                        <Card.Body>
                            <Card.Title>{props.companyName}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                            <Row className="d-flex px-3">
                                <span style={{fontWeight:'bold'}}>
                                Today's Price : ${props.price}
                                </span>
                            <button class="ml-auto bg-danger text-white" onClick={props.onClick}>Remove</button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            )
        }
        else{
            return(

                <Col lg={4}>
                    <Card className="m-3">
                        <Card.Body>
                            <Card.Title>{props.companyName}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                            <Row className="d-flex px-3">
                                <span style={{fontWeight:'bold'}}>
                                Today's Price : ${props.price}
                                </span>
                            <button class="ml-auto bg-primary text-white" onClick={()=>{
                                axios.post("http://localhost:8080/watchList",{
                                    userId: props.userId,
                                    companyId: props.companyId
                                }).then((res)=>{
                                    alert("Successfully added to the watchlist")
                                })
                                }}>Watch</button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            )
        }
    }
    else{
        return(
            <Col lg={4}>
                    <Card className="m-3">
                        <Card.Body>
                            <Card.Title>{props.companyName}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                            <Row className="d-flex px-3">
                                <span style={{fontWeight:'bold'}}>
                                Today's Price : ${props.price}
                                </span>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
        )
    }
}

export default CompanyDetailsComponent