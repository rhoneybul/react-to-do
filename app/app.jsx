var React = require("react");
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
var Main = require("Main");
var ToDoApp = require("ToDoApp");

var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
	console.log("New State", store.getState());
});

store.dispatch(actions.addToDo("Clean the Yard"));
store.dispatch(actions.setSearchText("Yard"));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation 
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App Styles
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
	<ToDoApp></ToDoApp>,		
	document.getElementById("app")
);