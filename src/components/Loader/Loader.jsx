import { Component } from 'react';
import { ColorRing } from '../../../node_modules/react-loader-spinner/dist/index';

class Loader extends Component {
  render() {
    return (
      <div>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }
}

export default Loader;
