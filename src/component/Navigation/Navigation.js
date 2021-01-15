import React from 'react';
import './Navigation.css';
import img from './logo.svg';

const Navigation = () => {
    return (
        <ul className="head">
            <img src={img} alt="logo"/>
            <li className="nav ml7">Features</li>
            <li className="nav">Pricing</li>
            <li className="nav">Contact</li>
            <li className="nav"><button className="bg-red ba b--near-white br2 w-10 h2 white grow">Login</button></li>
        </ul> 
    )
}

export default Navigation;