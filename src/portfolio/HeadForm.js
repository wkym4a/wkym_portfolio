import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addMemo } from './Store';

class HeadForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    // return <div>ヘッド情報</div>
    let port1="● Maっぷら"
    let port2="● 八千代台の不動産屋が作った月極駐車場管理アプリ"
    let port3="● タスク管理システム(社内使用を想定)"
    let select_port1= "　 "
    let select_port2= "　 "
    let select_port3= "　 "
    
    switch (this.props.num) {
      case 0:
        select_port1= "=>"
        break;
      case 1:
        select_port2= "=>"
        break;
      case 2:
        select_port3= "=>"
        break;
    }

    return (<div>
      <div>{select_port1}{port1}</div>
      <div>{select_port2}{port2}</div>
      <div>{select_port3}{port3}</div>
      </div>)
    // <div>ヘッド情報vv{num}</div>


    // if (this.props.num===1){
    //   return <div>{this.props.num}</div>
    // }else{
    //   return <div>ヘッド情報</div> 
    // }
    // return (
    //   <div >
    //     {if (this.props.num===1){
    //       <div>1111</div>
    //     }}
    //     {/* switch (this.props.num){
    //       case '0':
    //         <div></div>
    //       break;

    //       default:
    //         <div></div>
    //     } */}
    //     ヘッド情報{this.props.num}
    //   </div>
    // );
  }

}

export default connect((state)=>state)(HeadForm);