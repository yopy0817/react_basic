import React from 'react';
import PropTypes from 'prop-types';

class ContactCreate extends React.Component {
    //1st
    // state = {
    //     name: '',
    //     phone: ''
    // }
    // inputChange = (e) => {
    //     let nextState = {};
    //     nextState[e.target.name] = e.target.value;
    //     this.setState( nextState )
    // }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.inputClick = this.inputClick.bind(this);
    }

    //현재input값 state에 반영메서드
    inputChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    inputClick() {
        const info = {
            name: this.state.name,
            phone: this.state.phone
        };
        this.props.onCreate(info); //부모에게 전달받은 onCreate실행
        this.setState({ //실행후 state를 다시 초기화
            name: '',
            phone: ''
        })

        this.nameInput.focus(); //ref사용
        //document.getElementById("test").focus();
    }

    //엔터시에 등록처리메서드
    inputKeyPress = (e) => {
        if(e.charCode === 13) { //enter라는 뜻
            this.inputClick();
        }
    }

    render() {
        return (
        <div>
            <h2>추가하기</h2>
            <input type="text"
                   name="name"
                   id="test"
                   placeholder="이름"
                   value={this.state.name}
                   onChange={this.inputChange}
                   ref={ (ref) => {this.nameInput = ref} /* ref사용법(클릭이후에 실행하도록처리) */ }                   
                   />
            <input type="text"
                   name="phone"
                   placeholder="번호"
                   value={this.state.phone}
                   onChange={this.inputChange}
                   onKeyPress={this.inputKeyPress}
                   />
            <button type="button" onClick={this.inputClick}>추가</button>       
        </div>)
    }
}

ContactCreate.propTypes = { //props스타입 선언
    onCreate: PropTypes.func //props타입은 함수
}

export default ContactCreate;