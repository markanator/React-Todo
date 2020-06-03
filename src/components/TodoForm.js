import React from "react";

class TodoForm extends React.Component {
    // Constructor with state and props
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({item: e.target.value});
    };

    // class property to submit form
    submitItem = e => {
        e.preventDefault();
        this
            .props
            .addTask(e, this.state.item);
        this.setState({item: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        value={this.state.item}
                        name="item"
                        onChange={this.handleChanges}/>
                    <button type='submit'>Add</button>
                    <button className="clear-btn" onClick={this.props.clearCompleted}>
                        Clear Purchased
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
