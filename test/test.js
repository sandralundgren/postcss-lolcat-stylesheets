var _             = require('lodash');
var postcss       = require('postcss');
var expect        = require('chai').expect;
var lolProperties = require('lolcat-css-properties');
var lolValues     = require('lolcat-css-values');

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

var lolPropertiesTest = function (lolcat, english, value) {
    it('converts ' + lolcat + ' to ' + english, function (done) {
        test(
            'a{ ' + lolcat + ': ' + value + '; }',
            'a{ ' + english + ': ' + value + '; }',
            {},
            done
        );
    });
};

var lolValuesTest = function (lolcat, english, property) {
    it('converts ' + lolcat + ' to ' + english, function (done) {
        test(
            'a{ ' + property + ': ' + lolcat + '; }',
            'a{ ' + property + ': ' + english + '; }',
            {},
            done
        );
    });
};

describe('postcss-lolcat-stylesheets', function () {

    // Test Properties
    _.forEach(lolProperties, function (value, key) {
        lolPropertiesTest(value, key, '10px');
    });

    // Test Values
    _.forEach(lolValues, function (value, key) {
        lolValuesTest(value, key, 'color');
    });

    // Test !important
    it('converts !srsly to !important', function (done) {
        test(
            'a{ color: white !srsly; }',
            'a{ color: white !important; }',
            {},
            done
        );
    });

});
