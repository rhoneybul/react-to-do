var uuid = require("uuid");
var moment = require("moment");

export var searchTestReducer = (state='', action) => {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    };
};

export var showCompletedReducer = (state=false, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
}

export var todosReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TO_DO':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case 'TOGGLE_TO_DO':
            return state.map((todo) => {
                if(todo.id === action.todo) {
                    var nextCompleted = !todo.completed;

                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment.unix() : undefined
                    }
                }
            })
        default:
            return state;
    };
};