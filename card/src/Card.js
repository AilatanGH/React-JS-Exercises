import React from 'react';

import cuore from './images/like.png';

class Card extends React.Component {

  render(){
    return (
      <div className="box-card">
        <div className="header">
          <img src={this.props.img} className="circle"/>
          <div className="user-info">
            <h1 className="name">{this.props.name}</h1>
            <h2 className="data">{this.props.data}</h2>
          </div>
        </div>
        <p className="text-description">
          {this.props.text}
        </p>
        <footer className="footer">
          <a className="link">Leer más</a>
          <div className="number-likes">
            <p className="likes">{this.props.likes}</p>
            <img src={cuore} className="cuore"/>
          </div>
        </footer>
      </div>
    );
  }
}

export default Card;
