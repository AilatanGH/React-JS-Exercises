import React from 'react';
import cuore from './images/like.png';

class Footer extends React.component {
  render() {
    return (
      <footer className="footer">
        <a className="link">Leer más</a>
        <div className="number-likes">
          <p className="likes">{this.props.likes}</p>
          <img src={cuore} className="cuore"/>
        </div>
      </footer>
    );
  }
}

export default Footer;
