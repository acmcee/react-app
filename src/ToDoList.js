import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ulList: ['learn react', 'learn englist'],
            inputValue: "hello wordl"
        }
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })

    };

    handleAddButClick = () => {
        this.setState({
            ulList: [...this.state.ulList, this.state.inputValue],
            inputValue: ''
        })
    };

    handleDelButClick = () => {
        const newUlList = this.state.ulList;
        newUlList.pop();
        this.setState({ul_list: newUlList})
    };

    render() {
        return (
            <div className="App">
                <div>
                    <input onChange={this.handleInputChange}
                           value={this.state.inputValue}/>
                    <button onClick={this.handleAddButClick}>add</button>
                    <button onClick={this.handleDelButClick}>delete</button>
                </div>
                <div>
                    <ul>
                        {this.state.ulList.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoList;
