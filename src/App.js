import React, { Component } from 'react';
import './App.css';
import Simple from './Components/Simple/Simple';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div className="App">
        {'App'}

        <Switch>
            <Route path="/" component={Simple} />
        </Switch>
    </div>
    );
  }
}

export default withRouter(App);
