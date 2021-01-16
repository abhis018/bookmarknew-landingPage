import React from 'react';
import './Footer.css';
import img from './logo.svg';

const Footer = () => {
    return (
       <div>
           <div className="tc bg-blue pa5 white">
                <p className="b">35,000+ ALREADY JOINED
                <h2>Stay up-to-date with what<br/> we’re doing</h2></p>
                <input type="email" placeholder="Enter your Email Address" className="w-20 h2 br2 ba b--near-none "/>
                <button className="mv2 bg-red ba b--near-none br2 h2 w-10 b white grow shadow-2 f6 ml3">Contact Us</button>
           </div>
           <div className="last pa3 bg-navy white">
                <ul>
                    <img src={img} className="ml5" width="120px" alt="logo"/>
                    <li className="ma4 ph3">Features</li>
                    <li className="ma2 ph3">Pricing</li>
                    <li className="ma2 ph3">Contact</li>
                    <li className="">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                    </li>
                </ul>
           </div>
       </div>
    )
}

export default Footer;