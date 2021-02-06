import React from 'react';
import './Body.css';
import './Navigation.css';
import './Footer.css';
import img from './logo.svg';
import hero from './hero.svg';
import img1 from './pic1.svg';
import logo1 from './chrome.svg';
import logo2 from './firefox.svg';
import logo3 from './opera.svg';

const Simple = ({onRouteChange}) => {
    return (
        <div>
            <div>
                <ul className="head">
                    <img className="img" src={img} alt="logo"/>
                    <li className="nav nav-1">Features</li>
                    <li className="nav">Pricing</li>
                    <li className="nav">Contact</li>
                    <button className="ton bg-red ba b--near-white br2 h2 white grow">Login</button>
                </ul>
                <div className="body-head"> 
                    <div className="box1">
                        <h1 className="head-line">A Simple Bookmark Manager</h1>
                        <p className="para f5">A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.</p><br/>
                    
                        <button className="bg-blue ba b--near-none br2 h2 w-30 b white grow shadow-2 f7">Get it on Chrome</button>
                        <button className="ba b--near-white br2 mv4 h2 w-30 grow b gray shadow-5 ma2 f7">Get it on Firefox</button>
                    </div>
                    <img className="box2" src={hero} width="600px" height="380px" alt=""/>
                </div>
            </div>
            <h1 className="tc">Features</h1>
            <div className="tc gray">Our aim is to make it quick and easy for you to access your<br/> favourite websites. 
            Your bookmarks sync between your devices<br/> so you can access them on the go.</div>
            <div className="push">
                <button onClick={() => onRouteChange('speedy')} className="but grow">Simple Bookmarking</button>
                <button className="but grow">Speedy Searching</button>
                <button className="but grow">Easy Sharing</button>
            </div><hr className="hr"/>
            <div className="box">
                <img className="box1" src={img1} width="500px" height="300px" alt=""/>
                <div className="box2 mh6 pv5">
                    <h2>Bookmark in one click</h2>
                    <span className="f5">Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.</span><br/>
                    <button className="mv4 bg-blue ba b--near-none br2 h2 w-30 b white grow shadow-2 f7">More Info</button>
                </div>
            </div>
            <div className="tc">
                <h1>Download the extension</h1>
                <p className="para-1">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.</p>
            </div>
            <div class="main">
                <div class="rec1 shadow-5 br2">
                    <img src={logo1} width="70px"/>
                    <div>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <button className="click bg-blue grow ba b--near-none white br2 f7 h2 w-100">Add & Install Extension</button>
                    </div>
                </div>
                <div class="rec2 shadow-5 br2">
                    <img src={logo2} width="70px"/>
                    <div>
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 55</p>
                        <button className="click grow bg-blue ba b--near-none white br2 f7 h2 w-100">Add & Install Extension</button>
                    </div>
                </div>
                <div class="rec3 shadow-5 br2">
                    <img src={logo3} width="70px"/>
                    <div>
                        <h3>Add to Opera</h3>
                        <p>Minimum version 46</p>
                        <button className="click grow bg-blue ba b--near-none white br2 f7 h2 w-100">Add & Install Extension</button>
                    </div>
                </div>
            </div>
            <div className="tc ml7 mr7">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions<br/> you’d like 
                answered please feel free to email us.</p>
            </div>
            
            <div className="block">
                <div className="ques-box">
                        {/* <!-- Question 1 --> */}
                        <div className="ques"><hr/>
                            <h4>What is Bookmark?
                            <span className="bi bi-down">^</span>
                            </h4>
                        </div>
                        {/* <!-- Answer 1 --> */}
                        <div className="ans">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                        </div>
                    </div>
                <div className="ques-box">
                        {/* <!-- Question 2 --> */}
                        <div className="ques"><hr/>
                            <h4>How can I request a new browser?
                            <span className="bi bi-up">^</span>
                            </h4>
                        </div>
                        {/* <!-- Answer 2 --> */}
                        <div className="ans">
                            <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
                        </div>
                    </div>
                <div className="ques-box">
                        {/* <!-- Question 3 --> */}
                        <div className="ques"><hr/>
                            <h4>Is there a mobile app?
                            <span className="bi bi-up">^</span>
                            </h4>
                        </div>
                        {/* <!-- Answer 3 --> */}
                        <div className="ans">
                            <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                            sollicitudin ex et ultricies bibendum.</p>
                        </div>
                    </div>
                <div className="ques-box">
                        {/* <!-- Question 4 --> */}
                        <div className="ques"><hr/>
                            <h4>What about other Chromium browsers?
                            <span className="bi bi-up">^</span>
                            </h4>
                        </div>
                        {/* <!-- Answer 4 --> */}
                        <div className="ans">
                            <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                            vitae neque eget nisl gravida pellentesque non ut velit.</p>
                        </div><hr/>
                    </div>
                <button className="last-button bg-blue ba br2 h2 w-20 b white grow shadow-2 f7">More Info</button>    
            </div>
            <button className="last-button bg-blue ba br2 h2 w-10 b white grow shadow-2 f7">More Info</button>
            <div className="last-1 tc bg-blue pa5 white">
                <p className="b">35,000+ ALREADY JOINED
                <h2>Stay up-to-date with what<br/> we’re doing</h2></p>
                <input type="email" placeholder="Enter your Email Address" className="w-20 h2 br2 ba b--near-none "/>
                <button className="mv2 mh3 bg-red ba b--near-none br2 h2 w-10 b white grow shadow-2 f6 ml3">Contact Us</button>
           </div>
           <div className="last pa3 bg-navy white">
                <ul>
                    <img src={img} className=" foot-logo ml5" width="120px" alt="logo"/>
                    <li className="ma4 ph3">Features</li>
                    <li className="ma2 ph3">Pricing</li>
                    <li className="ma2 ph3">Contact</li>
                    <li className="logo-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default Simple;