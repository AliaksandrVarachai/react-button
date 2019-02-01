import React from 'react';
import styles from './Button.css';
import * as helpers from '../../helpers';

export class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    width: 100,
    height: 20,
    caption: 'Click'
  };

  clickHandler = event => { console.log(`Button "${this.props.caption}" is clicked`) };

  render() {
    const { width, height, caption } = this.props;
    return (
      <button
        className={styles.button} style={{ width, height }}
        onClick={this.clickHandler}
      >
        {caption}
          <br/>
        counter: {helpers.getCounter()}
      </button>
    )
  }
}
