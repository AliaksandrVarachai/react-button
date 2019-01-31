import './index.html'

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Button, RoundButton } from '../src/index';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <Button caption="Test Button" />
        </div>
        <div>
          <RoundButton caption="TestRoundButton" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));



