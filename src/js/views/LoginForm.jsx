"use strict";

import * as _ from "underscore";
import * as React from "react";
import { Input, Well, ButtonInput, Alert } from "react-bootstrap";
import * as config from 'configs/LoginFormConfig';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }
  componentDidMount() {
    this.props.store.bind("change", this.storeUpdated.bind(this));
  }
  componentWillUnmount() {
    this.props.store.unbind("change", this.storeUpdated.bind(this));
  }
  storeUpdated() {
    this.setState(this.props.store.getState());
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
          onClick={this.submitForm.bind(this)}
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
          ref={input.ref}
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
  submitForm() {
    this.props.store.dispatcher.dispatch({
      actionType: "loginUser",
      value: this.getData()
    });
  }
  getData() {
    let data = {};
    _.each(this.refs, function (node, i) {
      data[i] = node.getInputDOMNode().value;
    });
    return data;
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