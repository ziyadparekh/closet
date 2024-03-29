"use strict";

import * as Backbone from 'lib/ZPBackbone';
import * as _ from 'underscore';
import * as React from 'react';
import { Dispatcher } from 'flux';
import { LoginForm } from 'views/LoginForm';
import Store from 'stores/LoginStore';

let LoginRouter = Backbone.Router.extend({
    routes: {
        '(/)': 'navigateToIndex'
    },
    initialize: function (options) {
        this.options = _.defaults(options || {}, {
            //set option defaults here...
        });
        this.dispatcher = new Dispatcher();
    },
    navigateToIndex: function () {
        let loginStore = new Store({dispatcher: this.dispatcher});
        React.render(<LoginForm
            router={this}
            store={loginStore} />,
            document.getElementById("main-container"));
    }
});

export default LoginRouter;