var smartthings = require('./smartthings');
var dashboards = require('./dashboards');
var weather = require('./weather');
var settingsAPI = require('./settings');
var cameras = require('./cameras');
var templates = require('./templates');

module.exports.set = function(app) {
    smartthings.set(app);
    dashboards.set(app);
    weather.set(app);
    settingsAPI.set(app);
    cameras.set(app);
    templates.set(app);
}