import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ul_list: ['learn react', 'learn englist']
        }
    }


    handleButClick = () => {
        alert("click");
    };

    render() {
        return (
            <div className="App">
                <div>
                    <input/>
                    <button onClick={this.handleButClick}>add</button>
                </div>
                <div>
                    <ul>
                        {this.state.ul_list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoList;
