import React from "react";


class ToDoItem extends React.Component{
    constructor(props) {
        super(props);
    }

    handleDelClick = ()=>{
        console.log(this.props.index);
        this.props.handleDelete(this.props.index);
    };

    render() {
        return <li key={this.props.index}  onClick={this.handleDelClick}>
            {this.props.item}
        </li>
    }

}


export default ToDoItem