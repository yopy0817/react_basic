import React from 'react';
import PropTypes from 'prop-types';

class ContactResult extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        }

        //this.inputChange = this.inputChange.bind(this);
    }

    inputChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    listEdit = () => {
        this.props.listEdit(this.state.name, this.state.phone);
    }

    handleToggle = () => { //토글기능(setState가 비동기 입니다. 그래서 처음에 false가 나옵니다)\
        if(this.state.isEdit === false) {
            const {name, phone} = this.props.info;
            this.setState({
                name: name,
                phone: phone
            })
        } else {
            this.listEdit(); //isEdit이 true가 될때 변경메서드 실행
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
        console.log(this.state.isEdit)
    }
    
    //엔터시에 수정처리메서드
    inputKeyPress = (e) => {
        if(e.charCode === 13) { //enter라는 뜻
            this.handleToggle();
        }
    }

    render() {
        //console.log(this.props.keyindex)
        //console.log(this.props.info)
        
        const {keyindex, info} = this.props;
        const details = (<div>이름:{info.name} 전화번호:{info.phone}</div>)
        
        
        const edit = (//수정클릭시 사용할 화면
            <div>
                <p>
                <input type="text"
                   name="name"
                   placeholder="이름"
                   value={this.state.name}
                   onChange={this.inputChange}/>
                </p>
                <p>
                <input type="text"
                   name="phone"
                   placeholder="번호"
                   value={this.state.phone}
                   onChange={this.inputChange}
                   onKeyPress={this.inputKeyPress}
                   />
                </p>
            </div>
        );
        const view = this.state.isEdit ? edit : details;

        return (<div>
                    <h1>상세보기</h1>
                    {keyindex === -1 ? <div>선택하세요</div>  : view } 
                <button type="button" onClick={this.handleToggle}>{this.state.isEdit ? "확인" : "수정하기"}</button>
                <button type="button" onClick={this.props.listRemove}>삭제</button>
                </div>);
    }

}

ContactResult.defaultProps = {
    info: {
        name: '',
        phone: ''
    },
    listRemove: () => {console.error("listRemove에러"); },
    listEdit: () => {console.error("listEdit에러"); }
}

ContactResult.propTypes = {
    info: PropTypes.object,
    listRemove: PropTypes.func,
    listEdit: PropTypes.func
}

export default ContactResult;