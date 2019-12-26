import React from 'react';
import ContectChild from './ContectChild';

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
        this.inputChage = this.inputChage.bind(this);
    }
    
    inputChage(e) {
        console.log(e.target.value);
        this.setState({
            keyword: document.getElementById("keyword").value
        })
        
    }
    
    render() {
        const mapResult = (data) =>{

            data.sort();
            

            return data.map( (info, i) => { //첫번째매개값: 데이터값, 두번째매개값: 인덱스
                return (<ContectChild value={info} key={i}/>);
            } )
        }
        return (<div>
            <h1>컨택트</h1>
            검색:<input name="keyword"
                        id="keyword"
                        value={this.state.keyword} 
                        onChange={this.inputChage}/>
            <div>{mapResult(this.state.info)}</div>
        </div>)
    }

}
export default Contect;