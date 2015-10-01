"use strict";

import * as React from "react";
import { Input, Well, ButtonInput, Alert } from "react-bootstrap";
import * as config from 'configs/LoginFormConfig';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      failedAttempt: false
    };
  }
  getHeader() {
    return (
      <header>
        <h2 className={config.header.className}>{config.header.title}</h2>
        <hr /><br />
      </header>
    );
  }
  getForm() {
    return (
      <form className={config.form.className}>
        {this.getFailedAttempt()}
        {this.getInputs()}
        {this.getButtons()}
      </form>
    );
  }
  getButtons() {
    if (!config.form.buttons.length) {
      return "";
    }
    return config.form.buttons.map((button, i) => {
      return (
        <ButtonInput
          key={i}
          wrapperClassName={button.wrapperClassName}
          value={button.value}
          bsStyle={button.bsStyle} />
      );
    });
  }
  getInputs() {
    if (!config.form.inputs.length) {
      return "";
    }
    return config.form.inputs.map((input, i) => {
      return (
        <Input
          key={i}
          type={input.type}
          label={input.label}
          labelClassName={input.labelClassName}
          wrapperClassName={input.wrapperClassName}
          placeholder={input.placeholder} />
      );
    });
  }
  getFailedAttempt() {
    if (!this.state.failedAttempt) {
      return "";
    }
    return (
      <Alert bsStyle="danger">
        Your login credentials were incorrect, please try again
      </Alert>
    );
  }
  render() {
    return (
      <Well id={config.well.idTag}>
        {this.getHeader()}
        {this.getForm()}
      </Well>
    );
  }
}