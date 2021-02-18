import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as RB from "react-bootstrap";
import {Link} from "react-router-dom";

function MenuComponent(props){
    
    if(!(props.userId == 0)){
        return(
            <RB.Navbar bg="dark" variant="dark">
                
                <RB.Navbar.Brand href="/">mStock App</RB.Navbar.Brand>
                <Link className="text-white p-3" to={{
                    pathname:'/companies',
                    state: {userId:props.userId}  
                    }}>Companies</Link>
                <Link className="text-white p-3" to={{
                    pathname:'/watchlist',
                    state: {userId:props.userId}  
                    }}>Watch List</Link>
                <Link className="text-white p-3" to={{
                    pathname:'/compareperformance',
                    state: {userId:props.userId}  
                    }}>Compare Performance</Link>
                <RB.Nav.Link className="text-white" href="/login">Logout</RB.Nav.Link>
            </RB.Navbar>
        )
    }
    else{
        return(
            <RB.Navbar bg="dark" variant="dark">
                
                <RB.Navbar.Brand href="/">mStock App</RB.Navbar.Brand>
                <RB.Nav.Link className="text-white" href="/login">Login</RB.Nav.Link>
                <Link className="text-white p-3" to={{
                    pathname:'/companies',
                    state: {userId:0}  
                    }}>Companies</Link>
            </RB.Navbar>
        )
    }

}

export default MenuComponent