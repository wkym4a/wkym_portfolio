import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beforePortfolio } from './Store';
import { nextPortfolio } from './Store';
import { changeMemo } from './Store';
import { clearMemo } from './Store';

import Icon1 from '../img/Img1.jpeg'
import Icon2 from '../img/Img2.png'
import Icon3 from '../img/Img3.png'

import { Button,Row,Col } from "react-bootstrap";

class ContentForm extends Component {

  input = {
    fontSize:"11pt",
    width:"100%",
    height:"150px"
  }
  icon_flame = {
    width:"630px",
    maxHeight :"400px",
    backgroundColor:"red"
  }
  icon_content = {
    // position: "absolute",
    width:"100%",
    higth:"100%",
    objectFit: "cover"
  }

  constructor(props){
    super(props);

    this.doChange = this.doChange.bind(this);
    this.doClear = this.doClear.bind(this);
    this.doCopy = this.doCopy.bind(this);
    this.doBefore = this.doBefore.bind(this);
    this.doNext = this.doNext.bind(this);
  }

  doChange(e){
    let action = changeMemo(e.target.value);
    this.props.dispatch(action);
  }
  doClear(e){
    let action = clearMemo(e.target.value);
    this.props.dispatch(action);
  }
  doCopy(e){
    navigator.clipboard.writeText(this.props.data[this.props.num].memo)
  }
  doBefore(e){
    let action = beforePortfolio();
    this.props.dispatch(action);
    // this.setState({
    //   memo: this.props.data[this.props.num].memo
    // });

  }
  doNext(e){
    let action = nextPortfolio();
    this.props.dispatch(action);
  }

  render(){
    let port_name
    let url_info
    let poto_info
    let summary


    switch (this.props.num) {
      case 0:
        port_name= "Maっぷら";
        url_info= "http://mappura.com";
        poto_info = Icon1;
        summary = "2019年3月〜6月に通っていたプログラミングスクールの卒業制作アプリ──名前の由来は『WebのMapをぷらぷらする』。" +
                  "\n自身や他ユーザーが登録した地点情報を集めて『プラン』にすることで、" +
                  "\nhttp://mappura.com/plans/5/presentation のように『Map上をプラプラするプレゼン』を行うことができます。";
        break;
      case 1:
        port_name= "八千代台の不動産屋が作った駐車場管理アプリ";
        url_info= "http://yachiyo-parking.herokuapp.com";
        poto_info = Icon2;
        summary = "就業中の不動産会社にて、月極駐車場の管理業務を効率化するために作成したアプリ。" +
                  "\n管理対象である駐車場の情報（料金、空き状態など）を更新すると、"+
                  "その情報が【お客様向けに公開している、駐車場一覧地図】に反映されます。";
        break;
      case 2:
        port_name= "タスク管理システム(社内使用を想定)";
        url_info= "https://safe-chamber-93891.herokuapp.com";
        poto_info = Icon3;
        summary = "aaaaaaaaaaaaaaaaaaaa";
        break;
    }

    return (
      <div>
        {this.props.message}
        <div>

          <Row>
          <Col xs={12} md={8}>
            <h3>【{port_name}】</h3>
          </Col>
          <Col xs={2} md={1}>
          </Col>
          <Col xs={10} md={3}>
            <Button variant="primary" href={url_info} target="_blank" rel="noopener noreferrer" >リンク</Button>
          </Col>
          </Row>
          <br></br><br></br>
          <Row>
            <Col xs={6} md={1} >
              <Button onClick={this.doBefore} >«</Button>
              {/* <input type="submit"  value="前へ" onClick={this.doBefore}/> */}
            </Col>
            <Col xs={12} md={10}>
              <div style={this.icon_flame}><img src={poto_info}  alt="アイコン" style={this.icon_content}/></div>
            </Col>
            <Col xs={6} md={1}>
              <Button onClick={this.doNext}>»</Button>
              {/* <input type="submit"  value="次へ" onClick={this.doNext}/> */}
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={1} >
            </Col>
            <Col xs={10}>
              <div>[概要]</div>
              <div>{summary}</div>
            </Col>
            <Col xs={1} >
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={2} >
            </Col>
            <Col xs={8}>
              【{port_name}】についてのメモ
              <textarea size="80" onChange={this.doChange}
            style={this.input}  value={this.props.data[this.props.num].memo} ></textarea>
            </Col>
            <Col xs={2}>
            </Col>
          </Row>
          <Row>
            <Col xs={2} >
            </Col>
            <Col xs={4}>
              <Button onClick={this.doCopy}  >メモをコピー</Button>
            </Col>
            <Col xs={4}>
              <Button onClick={this.doClear} >メモをクリア</Button>
            </Col>
            <Col xs={2}>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default connect((state)=>state)(ContentForm);