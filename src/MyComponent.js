import React from 'react';
import PropTypes from "prop-types";

const MyComponent = ({name, children}) => {
  // const {name, children} = props;
  return (
    <div>
      {/*<h1>{props.name}의 깜포난또</h1>*/}
      {/*<h1>{props.children}</h1>*/}
      <h1>{name}의 깜포난또</h1>
      <h1>{children}</h1>
    </div>
  );
};

MyComponent.defaultProps = {
  name: '응애'
};

MyComponent.propTypes = {
  name: PropTypes.string
};

export default MyComponent;