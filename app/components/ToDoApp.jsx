var React = require('react');
var ToDoList = require("ToDoList");
var AddToDo = require('AddToDo');
var ToDoSearch = require("ToDoSearch");

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                }, {
                    id: 2,
                    text: 'clean the yard'
                }, {
                    id: 3,
                    text: 'do the shopping'
                }, {
                    id: 4,
                    text: 'phone mum'
                }
            ]
        }
    },    
    handleAddToDo: function(text) {
        alert('new to do: ' + text);
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={todos}></ToDoList>
                <AddToDo onAddTodo={this.handleAddToDo}/>
            </div>
        );
    }
});

module.exports = ToDoApp;