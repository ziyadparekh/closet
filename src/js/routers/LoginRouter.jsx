"use strict";

import * as Backbone from 'lib/ZPBackbone';
import * as _ from 'underscore';
import * as React from 'react';
import { Dispatcher } from 'flux';

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
    navigateToIndex: function (page) {
        console.log("navigate to index");

    }
});

export default LoginRouter;