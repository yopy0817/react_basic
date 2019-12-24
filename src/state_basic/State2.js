import React from 'react';

class State2_Child extends React.Component {
    render() {
        return (<div>
            이름:{this.props.value.name}, 
            번호:{this.props.value.phone}
        </div>)
    }
}
class State2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info:[{name:"홍길자", phone:1111},
                  {name:"김길동", phone:2222},
                  {name:"박길자", phone:3333},
                  {name:"이순신", phone:4444}
            ]
        }
    }
    
    render() {
        const mapResult = (data) =>{
            return data.map( (info, i) => { //첫번째매개값: 데이터값, 두번째매개값: 인덱스
                return (<State2_Child value={info} key={i}/>);
            } )
        }
        return (<div>
            <div>{mapResult(this.state.info)}</div>
        </div>)
    }

}
export default State2;