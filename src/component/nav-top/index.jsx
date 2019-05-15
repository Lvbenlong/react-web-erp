import React from 'react';
import { Link } from 'react-router-dom';

export default class NavTop extends React.Component {
  onLogout() {
    console.log('logout');
  }

  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>
              Wewee
            </b>
          </Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <span className="dropdown-toggle">
              <i className="fa fa-user fa-fw" />
              <i className="fa fa-caret-down" />
            </span>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <div>
                  <i className="fa fa-sign-out fa-fw" />
                  <span>
                    退出登录
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
