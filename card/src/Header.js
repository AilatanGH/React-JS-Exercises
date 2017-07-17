import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <div className="header">
        <img src={this.props.img} className="circle"/>
        <div className="user-info">
          <h1 className="name">{this.props.name}</h1>
          <h2 className="data">{this.props.data}</h2>
        </div>
      </div>
    );
  }
}

export default Header;
