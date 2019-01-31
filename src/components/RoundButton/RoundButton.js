import React from 'react';
import styles from './RoundButton.css';

export class RoundButton extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    width: 100,
    caption: 'Click'
  };

  clickHandler = event => { console.log(`RoundButton "${this.props.caption}" is clicked`) };

  render() {
    const { width, caption } = this.props;
    return (
      <button
        className={styles.button} style={{ width, height: width }}
        onClick={this.clickHandler}
      >
        {caption}
      </button>
    )
  }
}
