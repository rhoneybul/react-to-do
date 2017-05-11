var React = require("react");

var ToDoSearch = React.createClass({

    handleSearch: function() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchedText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchedText);

    },
    render: function() {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="search to dos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = ToDoSearch;