import React from 'react';

class TodoItems extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <li>{this.props.content}<button onClick={this.handleClick}>Delete</button></li>
        )
    }

    handleClick() {
        const { deleteTodoItem, index} = this.props;
        deleteTodoItem(index)
    }

}

export default TodoItems;