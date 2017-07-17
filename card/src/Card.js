import React from 'react';
import Header from './Header';
import cuore from './images/like.png';

class Card extends React.Component {
  render(){
    return (
      <div className="box-card">
        <Header
          img={this.props.img}
          name={this.props.name}
          data={this.props.data}
          />
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
