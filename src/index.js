import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/home';
import Layout from './component/layout';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
  render() {
    const LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Home} />
          <Route path="/product-category" component={Home} />
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/" render={() => LayoutRouter} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
