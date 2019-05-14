import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      Home
    </div>
  );
}

function About() {
  return (
    <div>
      About
    </div>
  );
}

function B() {
  return (
    <div>
      B
    </div>
  );
}


class App extends React.Component {
  render() {
    const activeStyle = {
      color: 'yellow',
      fontSize: '26px',
    };
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/home">
            home
          </Link>
          <NavLink exact to="/about" activeClassName="selected" activeStyle={activeStyle}>
          about
          </NavLink>
          <NavLink to="/b" activeClassName="selected" activeStyle={activeStyle}>
            BBB
          </NavLink>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/b" component={B} />

        </header>
      </div>

    );
  }
}

export default App;
