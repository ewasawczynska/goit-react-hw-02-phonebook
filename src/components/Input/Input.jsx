import React, { Component } from 'react';
import { ErrorMessage, StyledInput } from './Input.styled';
import PropTypes from 'prop-types';

export default class Input extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  checkInputValid() {
    const pattern = this.props.pattern;
    const value = this.state.value;
    const regExp = new RegExp(pattern);
    return regExp.test(value);
  }

  render() {
    const { type, name, pattern, title, required } = this.props;
    const { value } = this.state;
    const valid = value === '' || this.checkInputValid();
    const inputClassName = value !== '' ? (valid ? 'valid' : 'invalid') : '';
    return (
      <div>
        <StyledInput
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required={required}
          onChange={this.handleChange}
          className={inputClassName}
        />
        {!valid ? <ErrorMessage>{title}</ErrorMessage> : null}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
