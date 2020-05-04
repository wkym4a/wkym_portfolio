import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beforePortfolio } from './Store';
import { nextPortfolio } from './Store';
import { changeMemo } from './Store';
import { clearMemo } from './Store';

import Icon1 from '../img/Img1.png'
import Icon2 from '../img/Img2.jpeg'
import Icon3 from '../img/Img3.png'
import Icon4 from '../img/Img4.png'

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
    backgroundColor:"red",
    margin:"auto"
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
        port_name= 'ポートフォリオ';
        url_info= 'https://wkym-portfolio.herokuapp.com';
        poto_info = Icon1;
        summary = <span>学習中のreactで作成した、現在表示中の頁。↓↓↓の『メモ』は閲覧者様用
        <br></br>……ポートフォリオごとにメモ書きして、『メモをコピー』でクリップボードに保存するようにしています。よろしければお使いください。</span>
        break;
      case 1:
        port_name= 'Maっぷら';
        url_info= 'http://mappura.com';
        poto_info = Icon2;
        summary = <span>2019年3月〜6月に通っていたプログラミングスクールの卒業制作アプリ──名前の由来は『WebのMapをぷらぷらする』。
        <br></br>自身や他ユーザーが登録した地点情報を集めて『プラン』にすることで、
        <br></br><a href="http://mappura.com/plans/5/presentation" target="_blank" rel="noopener noreferrer">
          http://mappura.com/plans/5/presentation</a> のように『Map上をプラプラするプレゼン』を行うことができます。</span>
        break;
      case 2:
        port_name= "八千代台の不動産屋が作った駐車場管理アプリ";
        url_info= "http://yachiyo-parking.herokuapp.com";
        poto_info = Icon3;
        summary = <span>就業中の不動産会社にて、月極駐車場の管理業務を効率化するために作成したアプリ。
                  <br></br>管理対象である駐車場の情報（料金、空き状態など）を更新すると、
                  その情報が【お客様向けに公開している、駐車場一覧地図】に反映されます。</span>
        break;
      case 3:
        port_name= "タスク管理システム(社内使用を想定)";
        url_info= "https://safe-chamber-93891.herokuapp.com";
        poto_info = Icon4;
        summary = <span>当時通っていたプログラミングスクールの課題にて制作（「社員コード→001」「パスワード→password」でログイン可能です）。
        <br></br>・メールアドレスではなく社員コードでのログイン
        <br></br>・検索、ソート機能の充実
        <br></br>など、機能については自分なりに工夫してみましたが、
        <br></br>デザインについては当時のスクール同期生から「どっかで見たことある」「前の会社で使ってた古いシステムがこんな感じ」などの評価を受けました。</span>
        break;
    }

    return (
      <span>
        <div className="err_msg">{this.props.message}</div>
        <div>

          <Row>
            <Col xs={12} md={12}>
              <h3 className="title"><a href={url_info} target="_blank" rel="noopener noreferrer">【{port_name}】</a></h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={1} className="move-btn">
              <Button onClick={this.doBefore} className="move-btn-size">«</Button>
            </Col>
            <Col xs={12} md={10}>
              <div style={this.icon_flame} ><img src={poto_info} style={this.icon_content}/></div>
            </Col>
            <Col xs={12} md={1} className="move-btn">
              <Button onClick={this.doNext} className="move-btn-size">»</Button>
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
            <Col xs={2} className="move-btn">
              <Button onClick={this.doBefore} className="move-btn-size">«</Button>
            </Col>
            <Col xs={8}>
              【{port_name}】についてのメモ
              <textarea size="80" onChange={this.doChange}
            style={this.input}  value={this.props.data[this.props.num].memo} ></textarea>
            </Col>
            <Col xs={2} className="move-btn">
              <Button onClick={this.doNext} className="move-btn-size">»</Button>
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
      </span>
    );
  }

}

export default connect((state)=>state)(ContentForm);