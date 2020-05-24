import React from 'react';
import ToDoItem from "./ToDoItem";


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ulList: ['learn react', 'learn english'],
            inputValue: "hello world"
        }
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })

    };

    handleAddButClick = () => {
        let value = this.state.inputValue;
        if (value === "") {
            value = "hello world"
        }
        this.setState({
            ulList: [...this.state.ulList, value],
            inputValue: ''
        })
    };

    handleDelete = (index) => {
        const newList = [...this.state.ulList];
        newList.splice(index, 1);
        this.setState({ulList: newList})
    };


    getToDoItems = () => {
        return (
            this.state.ulList.map((item, index) => {
                return <ToDoItem key={index} index={index} item={item}
                                 handleDelete={this.handleDelete}>
                </ToDoItem>
            })
        )
    };

    render() {
        return (
            <div className="App">
                <div>
                    <input onChange={this.handleInputChange}
                           value={this.state.inputValue}/>
                    <button onClick={this.handleAddButClick}>add</button>
                </div>
                <div>
                    <ul>
                        {this.getToDoItems()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoList;
