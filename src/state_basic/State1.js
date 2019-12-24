import React from 'react'

class State1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.numberUp = this.numberUp.bind(this); //setState는 this가 뭔지 몰라
    }
    numberUp() {
        this.setState({ 
            value:this.state.value + 1 //this가 뭔지 몰라~ (생성자에 선언해주자)
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.numberUp}>넘버핸들링</button>
            </div>
        )
    }
}
export default State1;