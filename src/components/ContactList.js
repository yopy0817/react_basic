import React from 'react';

class ContactList extends React.Component{

    render() {
        
        return (
            <div onClick={this.props.onClick}>{/*부모로부터 넘어온 클릭 이벤트실행 */}
                이름:{this.props.value.name}
            </div>
        )
    }

}

export default ContactList;