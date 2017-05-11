var React = require("react");
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
var Main = require("Main");
var ToDoApp = require("ToDoApp");

// Load Foundation 
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App Styles
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
	<ToDoApp></ToDoApp>,		
	document.getElementById("app")
);