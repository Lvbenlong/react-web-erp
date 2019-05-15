import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavSide extends React.Component {
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
            <li>
              <NavLink exact activeClassName="active-menu" to="/">
                <i className="fa fa-dashboard" />
                <span>
                  首页
                </span>
              </NavLink>
            </li>
            <li className="active">
              <Link to="/product">
                <i className="fa fa-list" />
                <span>
                  商品
                </span>
                <span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/product" activeClassName="active-menu">
                  商品管理
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/product-category" activeClassName="active-menu">
                  品类管理
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

        </div>

      </div>
    );
  }
}
