import React from 'react';

class ContectChild extends React.Component{

    render() {
        return (
            <div>
                이름:{this.props.value.name}, 
                번호:{this.props.value.phone}
            </div>
        )
    }

}

export default ContectChild;