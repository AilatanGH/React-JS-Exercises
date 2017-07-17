import React from 'react';
import Header from './Header';

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
        <Footer
          likes={this.props.likes}/>
      </div>
    );
  }
}

export default Card;
