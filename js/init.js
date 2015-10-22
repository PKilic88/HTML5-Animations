/**
 * Created by Philipp on 11.10.2015.
 */

"use strict";
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with another path,
    //load them from their respective directory.
    paths:
    {
        'scripts': '../scripts',
        'jquery': 'libs/jquery',
        'lodash': 'libs/lodash'
    },

    shim: {
        'bootstrap': ['jquery']
    },
    map: {
        '_': {
            'lodash': 'lodash'
        }
    }

});

requirejs(["start"], function(Start) {
    var start = new Start();

    start.init();
});
