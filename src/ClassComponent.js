import React, {Component} from 'react';
import PropTypes from "prop-types";

class ClassComponent extends Component {
  render() {
    const {name, age} = this.props;
    return (
      <>
        <div><h1>안녕하세요. 제 이름은 {name}이며,</h1></div>
        <div><h1>나이는 {age}살입니다.</h1></div>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: '이서율',
  age: '17',
}

ClassComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}

export default ClassComponent;