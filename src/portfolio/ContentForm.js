import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beforePortfolio } from './Store';
import { nextPortfolio } from './Store';
import { changeMemo } from './Store';

import Icon1 from '../img/Img1.jpeg'
import Icon2 from '../img/Img2.png'
import Icon3 from '../img/Img3.png'

class ContentForm extends Component {

  input = {
    fontSize:"14pt",
    color:"#006",
    padding:"0px",
  }
  icon_flame = {
    width:"800px",
    higth:"400px",
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
    this.doBefore = this.doBefore.bind(this);
    this.doNext = this.doNext.bind(this);
  }

  doChange(e){
    let action = changeMemo(e.target.value);
    this.props.dispatch(action);


    // this.setState({
    //   memo: e.target.value
    // });
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


    switch (this.props.num) {
      case 0:
        port_name= "Maっぷら";
        url_info= "http://mappura.com"
        poto_info = Icon1
        break;
      case 1:
        port_name= "八千代台の不動産屋が作った月極駐車場管理アプリ";
        url_info= "http://yachiyo-parking.herokuapp.com"
        poto_info = Icon2
        break;
      case 2:
        port_name= "タスク管理システム(社内使用を想定)";
        url_info= "https://safe-chamber-93891.herokuapp.com"
        poto_info = Icon3
        break;
    }

    return (
      <div>
        <h2>【{port_name}】</h2>
        <a>{this.props.message}</a>
        <a href={url_info}>リンク</a>
        {/* <a type="submit"  value="リンク" href={url_info}/> */}
        <input type="submit"  value="前へ" onClick={this.doBefore}/>
        <div style={this.icon_flame}><img src={poto_info}  alt="アイコン" style={this.icon_content}/></div>
        <input type="submit"  value="次へ" onClick={this.doNext}/>
      </div>
    );
  }

}

export default connect((state)=>state)(ContentForm);