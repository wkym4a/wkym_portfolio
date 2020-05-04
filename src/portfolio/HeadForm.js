import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,Row,Col } from "react-bootstrap";

class HeadForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    // return <div>ヘッド情報</div>
    let port1="● ポートフォリオ(この頁)"
    let port2="● Maっぷら"
    let port3="● 八千代台の不動産屋が作った月極駐車場管理アプリ"
    let port4="● タスク管理システム(社内使用を想定)"
    let select_port1= "　 "
    let select_port2= "　 "
    let select_port3= "　 "
    let select_port4= "　 "
    
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
      case 3:
        select_port4= "=>"
        break;
    }

    return (
      <Row>
      <Col xs={2} md={3}>
      </Col>
      <Col xs={10} md={9}>
        <div>
          <div>{select_port1}{port1}</div>
          <div>{select_port2}{port2}</div>
          <div>{select_port3}{port3}</div>
          <div>{select_port4}{port4}</div>
        </div>
      </Col>
    </Row>
    )
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