import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">ReduxStagram</Link>
        </h1>
      </div>
      {React.cloneElement(this.props.children, this.props)}
    )
  }
});

export default Main;
