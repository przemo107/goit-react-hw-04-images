import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  render() {
    const { handleMoreImage } = this.props;
    return (
      <>
        <button className={css.button} onClick={handleMoreImage}>
          Load More
        </button>
      </>
    );
  }
}

export default Button;
