import React from 'react';
import NavTop from '../nav-top';
import NavSide from '../nav-side';
import './theme.css';

export default class Home extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <NavTop />
        <NavSide />
        {this.props.children}
      </div>
    );
  }
}
