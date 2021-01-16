import Navigation from './component/Navigation/Navigation';
import Body from './component/Body/Body';
import React from 'react';
import Footer from './component/Footer/Footer';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
