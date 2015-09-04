var _             = require('lodash');
var postcss       = require('postcss');
var lolProperties = require('lolcat-css-properties');
var lolValues     = require('lolcat-css-values');

module.exports = postcss.plugin('postcss-lolcat-stylesheets', function (opts) {

    // your own declarations can be added in this object
    opts = opts || {};
    //                    key : value
    //   'animation-direction': 'animashun-direcshun'  lolproperties
    //                 'right': 'rite'                 lolvalue

    return function (css) {

        css.walkDecls(function transformdecl(decl) {

            // Properties
            _.forEach(lolProperties, function (value, key) {
                if (decl.prop === value) {
                    decl.prop = key;
                }
            });

            // Values
            _.forEach(lolValues, function (value, key) {
                decl.value = decl.value.replace(value, key);
            });

            // !Important
            if (decl.value.indexOf('!srsly') >= 0) {
                decl.value = decl.value.replace(/\s*!srsly\s*/, '');
                decl.important = true;
            }
        });

    };
});
