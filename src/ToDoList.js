import React from 'react';

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
        if (value === ""){
            value = "hello world"
        }
        this.setState({
            ulList: [...this.state.ulList, value],
            inputValue: ''
        })
    };

    handleDelClick = (index) => {
        console.log("del "+ index);
        const newList = [...this.state.ulList];
        newList.splice(index, 1);
        console.log(newList);
        this.setState({ulList: newList})
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
                        {this.state.ulList.map((item, index) => {
                            return <li key={index} onClick={this.handleDelClick.bind(this, index)}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoList;
