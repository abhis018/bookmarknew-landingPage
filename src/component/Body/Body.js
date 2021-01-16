import React from 'react';
import './Body.css';
import hero from './hero.svg';
import img1 from './pic1.svg';
import img2 from './pic2.svg';
import img3 from './pic3.svg';
import logo1 from './chrome.svg';
import logo2 from './firefox.svg';
import logo3 from './opera.svg';

const Body = () => {
    return (
        <div>
            <div className="box">
                <div className="box1">
                    <h1>A Simple Bookmark Manager</h1>
                    <span className="f5">A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.</span><br/>
                
                    <button className="bg-blue ba b--near-none br2 h2 w-30 b white grow shadow-2 f7">Get it on Chrome</button>
                    <button className="ba b--near-white br2 mv4 h2 w-30 grow b gray shadow-5 ma2 f7">Get it on Firefox</button>
                </div>
                <img className="box2" src={hero} width="600px" height="450px" alt=""/>
            </div>
            <h1 className="tc">Features</h1>
            <div className="tc gray">Our aim is to make it quick and easy for you to access your<br/> favourite websites. 
            Your bookmarks sync between your devices<br/> so you can access them on the go.</div>
            <ul className="tc mt4">
                <li className="f6">Simple Bookmarking</li>
                <li className="ma4 f6">Speedy Searching</li>
                <li className="ma4 f6">Easy Sharing</li><hr/>
            </ul>
            <div className="box">
                <img className="box1" src={img1} width="500px" height="300px" alt=""/>
                <div className="box2 mh5 pv5">
                    <h2>Bookmark in one click</h2>
                    <span className="f5">Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.</span><br/>
                    <button className="mv4 bg-blue ba b--near-none br2 h2 w-30 b white grow shadow-2 f7">More Info</button>
                </div>
            </div>
            <div className="box">
                <img className="box1" src={img2} width="500px" height="300px" alt=""/>
                <div className="box2 mh5 pv5">
                    <h2>Intelligent search</h2>
                    <span className="f5">Our powerful search feature will help you find saved sites in no time at all. 
                    No need to trawl through all of your bookmarks.</span><br/>
                    <button className="mv4 bg-blue ba b--near-none br2 h2 w-30 b white grow shadow-2 f7">More Info</button>
                </div>
            </div>
            <div className="box">
                <img className="box1" src={img3} width="500px" height="300px" alt=""/>
                <div className="box2 mh5 pv5">
                    <h2>Share your bookmarks</h2>
                    <span className="f5">Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of a button.</span><br/>
                    <button className="mv4 bg-blue ba b--near-none br2 h2 w-30 b white grow shadow-2 f7">More Info</button>
                </div>
            </div>
            <div className="tc">
                <h1>Download the extension</h1>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </div>
            <div class="main">
                <div class="rec1 shadow-5 br2 grow">
                    <img src={logo1} width="70px"/>
                    <div>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <button className="click bg-blue ba b--near-none white br2 f7 h2 w-100">Add & Install Extension</button>
                    </div>
                </div>
                <div class="rec2 shadow-5 br2 grow">
                    <img src={logo2} width="70px"/>
                    <div>
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 55</p>
                        <button className="click bg-blue ba b--near-none white br2 f7 h2 w-100">Add & Install Extension</button>
                    </div>
                </div>
                <div class="rec3 shadow-5 br2 grow">
                    <img src={logo3} width="70px"/>
                    <div>
                        <h3>Add to Opera</h3>
                        <p>Minimum version 46</p>
                        <button className="click bg-blue ba b--near-none white br2 f7 h2 w-100">Add & Install Extension</button>
                    </div>
                </div>
            </div>
            <div className="ques tc ml7 mr7">
                <h2>Frequently Asked Questions</h2>
                
                <p>Here are some of our FAQs. If you have any other questions<br/> you’d like 
                answered please feel free to email us.</p>

                {/* <!-- Question 1 --> */}
                What is Bookmark?

                {/* <!-- Answer 1 --> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

                {/* <!-- Question 2 --> */}
                How can I request a new browser?

                {/* <!-- Answer 2 --> */}
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.

                {/* <!-- Question 3 --> */}
                Is there a mobile app?

                {/* <!-- Answer 3 --> */}
                Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                sollicitudin ex et ultricies bibendum.

                {/* <!-- Question 4 --> */}
                What about other Chromium browsers?

                {/* <!-- Answer 4 --> */}
                Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                vitae neque eget nisl gravida pellentesque non ut velit.

                <button className="mv4 bg-blue ba b--near-none br2 h2 w-10 b white grow shadow-2 f7">More Info</button>
            </div>
            
        </div>
    )
}

export default Body;