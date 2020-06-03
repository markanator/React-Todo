// your components will all go in this `component` directory. feel free to
// change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = ({listTodo,toggleItem,clearCompleted}) => {
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
        <div className="task-list">
            {
                listTodo
                .map(item => (<Todo key={item.id} item={item} toggleItem={toggleItem}/>))}
            {/* <button className="clear-btn" onClick={clearCompleted}>
                Clear Purchased
            </button> */}
        </div>
    );
};

export default TodoList;
