import './index.html'

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Button, RoundButton, CounterButton } from '../src/index';
import * as helpers from '../src/helpers';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 42
    };
    helpers.setCounter(this.state.counter);
  }

  handlerInc = () => {
    this.setState({
      counter: helpers.increment()
    });
  };

  handlerDec = () => {
    this.setState({
      counter: helpers.decrement()
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <Button caption="Test Button" />
        </div>
        <div>
          <RoundButton caption="TestRoundButton" />
        </div>
        <br/><br/>
        <div>
          <CounterButton
            counter={this.state.counter}
            handlerInc={this.handlerInc}
            handlerDec={this.handlerDec}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));



