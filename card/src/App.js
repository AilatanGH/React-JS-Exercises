import React, { Component } from 'react';
import Card from './Card';
import Header from './Header';

import cat from './images/cat.jpeg';
import dog from './images/dog.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
        img={cat}
        name="Natalia Guaita"
        data="Lunes 27 de noviembre"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        likes={37}
         />
        <Card
        img={dog}
        name="Manolito el Gafotas"
        data="Viernes 14 de octubre"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        likes={27}/>
      </div>
    );
  }
}

export default App;
