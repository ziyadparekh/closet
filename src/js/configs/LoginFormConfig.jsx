"use strict";

const LoginFormConfig = {
  well: {
    idTag: "login-internal"
  },
  header: {
    title: "DEALER ACCOUNT LOGIN",
    className: "heading"
  },
  form: {
    className: "form-horizontal",
    inputs: [
      {
        displayName: "Input",
        type: "text",
        label: "Email",
        labelClassName: "col-sm-3",
        wrapperClassName: "col-sm-6",
        placeholder: "Email address"
      },
      {
        displayName: "Input",
        type: "password",
        label: "Password",
        labelClassName: "col-sm-3",
        wrapperClassName: "col-sm-6",
        placeholder: "Password"
      }
    ],
    buttons: [
      {
        displayName: "ButtonInput",
        value: "SIGN IN",
        wrapperClassName: "col-xs-offset-3 col-xs-10",
        bsStyle: "primary"
      }
    ]
  }
};

export default LoginFormConfig;