/*global require*/
require({
    baseUrl : '../..',
    packages : [{
        name : 'dojo',
        location : 'ThirdParty/dojo-release-1.7.2-src/dojo'
    }, {
        name : 'dijit',
        location : 'ThirdParty/dojo-release-1.7.2-src/dijit'
    }, {
        name : 'dojox',
        location : 'ThirdParty/dojo-release-1.7.2-src/dojox'
    }, {
        name : 'Core',
        location : 'Source/Core'
    }, {
        name : 'DynamicScene',
        location : 'Source/DynamicScene'
    }, {
        name : 'Renderer',
        location : 'Source/Renderer'
    }, {
        name : 'Scene',
        location : 'Source/Scene'
    }, {
        name : 'Shaders',
        location : 'Source/Shaders'
    }, {
        name : 'Timeline',
        location : 'Source/Timeline'
    }, {
        name : 'ThirdParty',
        location : 'Source/ThirdParty'
    }, {
        name : 'DojoWidgets',
        location : 'Apps/DojoWidgets'
    }, {
        name : 'TimelineDemo',
        location : 'Apps/TimelineDemo'
    }]
}, [
    'dojo/parser',
    'dojo/dom-class',
    'dojo/_base/window',
    "dojo/date/stamp",
    "dijit/form/Button",
    "dijit/Calendar",
    "dijit/form/TimeTextBox",
    'TimelineDemo/TimelineDemo',
    'dojo/domReady!'
], function(
    parser,
    domClass,
    win) {
    "use strict";

    parser.parse();
    domClass.remove(win.body(), 'loading');
});