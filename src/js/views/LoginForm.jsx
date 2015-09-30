"use strict";

import * as React from "react";
import { Input, Well, ButtonInput } from "react-bootstrap";

export class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Well id="login-internal">
                <header>
                    <h2 className="heading">DEALER ACCOUNT LOGIN</h2>
                    <hr /><br />
                </header>
                <form className="form-horizontal">
                    <Input type="text" label="Email" labelClassName="col-sm-3" wrapperClassName="col-sm-6" placeholder="Email address" />
                    <Input type="password" label="Password" labelClassName="col-sm-3" wrapperClassName="col-sm-6" placeholder="Password" />
                    <ButtonInput wrapperClassName="col-xs-offset-3 col-xs-10" value="SIGN IN" bsStyle="primary" />
                </form>
            </Well>
        );
    }
}