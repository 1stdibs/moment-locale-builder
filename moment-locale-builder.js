"use strict";
var moment = require('moment');
var zipObject = require('lodash.zipobject');
var map = require('lodash.map');
var uuid = require('uuid');
var buildMomentLocale = function (localeConfig, passedMoment) {
    var localeName = "-module-locale-" + uuid.v4();
    var theMoment = passedMoment || moment;
    moment.locale(localeName, localeConfig);
    return (function () {
        return theMoment.apply(theMoment, arguments).locale(localeName);
    });
};
module.exports = function (localeConfigs) {
    return zipObject(map(localeConfigs, function (localeConfig, localeName) {
        return [localeName, buildMomentLocale(localeConfig)]
    }));
}
