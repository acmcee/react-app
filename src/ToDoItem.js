import React from "react";


class ToDoItem extends React.Component{

    handleDelClick = ()=>{
        const {index, handleDelete} = this.props;
        handleDelete(index);
    };

    render() {
        const {index, item} = this.props;
        return <li key={index}  onClick={this.handleDelClick}>
            {item}
        </li>
    }

}

export default ToDoItem