import React from 'react';
import ContactList from './ContactList';
import ContactResult from './ContactResult';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyindex: -1,
            keyword: '',
            info:[{name:"홍길자", phone:1111},
                  {name:"김길동", phone:2222},
                  {name:"박길자", phone:3333},
                  {name:"이순신", phone:4444}
            ]
        }
        this.inputChange = this.inputChange.bind(this);
        this.inputClick = this.inputClick.bind(this);
    }
    
    //첫번째 랜더링 전에 실행되는 메서드
    componentWillMount() {
        const infoData = localStorage.getItem("infoData");
        console.log(infoData);
        if(infoData != null) {
            this.setState({
                info: JSON.parse(infoData)
            })
        }
    }
    //두번째 컴포넌트가 업데이트 된후에 실행(이전 프롭스, 이전스테이트)
    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevState.info) != JSON.stringify(this.state.info) ) {
            localStorage.setItem("infoData", JSON.stringify(this.state.info)); //로컬스토리지에 저장
        }
    }


    //input이 변경될떄마다 실행하는 메서드
    inputChange(e) {
        //console.log(e.target.value);
        //document.getElementById("keyword").value
        this.setState({
            keyword: document.getElementById("keyword").value
        })
        
    }
     //input이 클릭될때마다 실행하는 메서드
    inputClick(i) {
        //console.log(i);
        this.setState({
            keyindex: i
        })
      
    }

    listCreate = (info) => {
        this.setState({
            info: update(this.state.info, 
                         { $push: [info] })//react-addons-update의 추가메서드
            //info: this.state.info.push()
        })
    }

    listRemove = () => {
        if(this.state.keyindex < 0) {
            return; //0보다 작으면 선택된 경우가 아니므로 삭제하지 않음
        }
        this.setState({
            info: update(this.state.info, 
                         { $splice: [[this.state.keyindex, 1]] }),//react-addons-update의 삭제 메서드(배열의 배열전달)
            keyindex: -1 //키값을 다시 원상태로
        })
    }

    listEdit = (name, phone) => {
        this.setState({
            info: update(this.state.info,
                        {
                            [this.state.keyindex]: { //keyindex번째 아이템을 수정
                                name: {$set: name},
                                phone: {$set: phone}
                            }
                        }
                )
        })
    }

    render() {
        const mapResult = (data) =>{
            //console.log(data);
            data.sort(); //정렬
            data = data.filter( (info) => {
                return info.name.indexOf(this.state.keyword) > -1; //찾으면 0을반환, 못찾으면 -1을 반환
            })
            //console.log(data);

            return data.map( (info, i) => { //첫번째매개값: 데이터값, 두번째매개값: 인덱스
                //****컴포넌트에 event는 적용안됨 . Component의 props로 전달된다.
                //console.log(i);
                return (<ContactList value={info} key={i} onClick={() => this.inputClick(i)}/>); 
            } )
        }
        return (<div>
            <h1>컨택트</h1>
            검색:<input name="keyword"
                        id="keyword"
                        value={this.state.keyword} 
                        onChange={this.inputChange}/>
            <div>{mapResult(this.state.info)}</div>
            <div>{<ContactResult keyindex={this.state.keyindex}
                                 info={this.state.info[this.state.keyindex]}
                                 listRemove={this.listRemove}
                                 listEdit={this.listEdit}
                                 />}
            </div>
            <div>
                {<ContactCreate onCreate={this.listCreate}/>/*props으로 함수전달 */}               
            </div>
            
        </div>)
    }

}
export default Contact;