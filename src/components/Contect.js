import React from 'react';

class ContectChild extends React.Component {
    render() {
        return (<div>
            이름:{this.props.value.name}, 
            번호:{this.props.value.phone}
        </div>)
    }
}
class Contect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
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
                return (<ContectChild value={info} key={i}/>);
            } )
        }
        return (<div>
            <h1>컨택트</h1>
            <div>{mapResult(this.state.info)}</div>
        </div>)
    }

}
export default Contect;