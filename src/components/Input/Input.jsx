import { Component } from 'react';
import { StyledInput } from './Input.styled';
import PropTypes from 'prop-types';

export default class Input extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  checkInputValid() {
    const pattern = this.input.pattern;
    const value = this.state.value;
    const regExp = new RegExp(pattern);
    return regExp.test(value);
  }

  render() {
    const { type, name, pattern, title, placeholder, required } = this.props;
    const { value } = this.state;
    return (
      <StyledInput
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
      ></StyledInput>
    );
  }
}

// Input.propTypes = {

// }
