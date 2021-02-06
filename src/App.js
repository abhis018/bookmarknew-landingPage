import Simple from './component/Simple/Simple';
import Speedy from './component/Speedy/Speedy';
import Easy from './component/Easy/Easy';
import React, { Component } from 'react';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state= {
      route: 'simple'
    }
  }

  onRouteChange = (route) => {
    if(route === 'simple'){
      this.setState({route: 'easy'})
    }else if(route === 'simple'){
      this.setState({route: 'speedy'})
    }
    this.setState({route: route});
  }
//function App() {
  render() {
    return (
      <div className="App">
        {this.state.route === 'simple'
        ? <Speedy onRouteChange = {this.onRouteChange}/>
        :( this.state.route ==='speedy'
          ? <Simple onRouteChange = {this.onRouteChange}/>
          : (this.state.route === 'easy'
            ? <Easy onRouteChange = {this.onRouteChange}/>
            :<Simple onRouteChange = {this.onRouteChange}/>))
        }
      </div>
    );
  }
}

export default App;
