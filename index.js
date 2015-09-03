var _             = require('lodash');
var postcss       = require('postcss');
var lolProperties = require('lolcat-css-properties');
var lolValues     = require('lolcat-css-values');

module.exports = postcss.plugin('postcss-lolcat-stylesheets', function (opts) {

    opts = opts || {};  // your own declarations can be added in this object

//                    key : value
//   'animation-direction': 'animashun-direcshun'  lolproperties
//                 'right': 'rite'                 lolvalue

    return function (css) {

        css.walkDeclars(function transformDeclars(declars) {

            // Properties
            _.forEach(lolProperties, function (value, key) {
                if (declars.prop === value) {
                    declars.prop = key;
                }
            });

            // Values
            _.forEach(lolValues, function (value, key) {
                declars.value = declars.value.replace(value, key);
            });

            // !Important
            if (declars.value.indexOf('!srsly') >= 0) {
                declars.value = declars.value.replace(/\s*!srsly\s*/, '');
                declars.important = true;
            }
        });

    };
});
