import React from 'react';

class ContactResult extends React.Component {
    render() {
        console.log(this.props.keyindex)
        console.log(this.props.info)
        const {keyindex, info} = this.props;
        return (<div>
                    <h1>상세보기</h1>
                    {keyindex === -1 
                    ? <div></div> 
                    : <div>이름:{info.name} 전화번호:{info.phone}</div>
                }</div>);
    }

}

ContactResult.defaultProps = {
    info: {
        name: '',
        phone: ''
    }
}

export default ContactResult;