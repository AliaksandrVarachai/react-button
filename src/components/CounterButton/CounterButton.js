import React from 'react';
import style from './CounterButton.css';

export class CounterButton extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    counter: 0,
    handlerInc: () => console.log('Increment does not work'),
    handlerDec: () => console.log('Decrement does not work'),
  };

  render() {
    return (
      <div className={style.container}>
        <div className={style.counterContainer}>{this.props.counter}</div>
        <div className={style.changeContainer}>
          <button
            className={`${style.changeButton} ${style.buttonInc}`}
            onClick={this.props.handlerInc}
          >
            <div className={`${style.arrow} ${style.arrowInc}`}/>
          </button>
          <button
            className={`${style.changeButton} ${style.buttonDec}`}
            onClick={this.props.handlerDec}
          >
            <div className={`${style.arrow} ${style.arrowDec}`}/>
          </button>
        </div>
      </div>
    )
  }
}

