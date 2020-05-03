import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beforePortfolio } from './Store';
import { nextPortfolio } from './Store';
import { changeMemo } from './Store';

import Icon from '../img/Img3.png'

class ContentForm extends Component {

  input = {
    fontSize:"14pt",
    color:"#006",
    padding:"0px",
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
    return (
      <div>
        内容情報{this.props.num}
        <div>
          ストアから<input type="text" size="80" onChange={this.doChange}
          style={this.input}  value={this.props.data[this.props.num].memo} />
        </div>
        
        <input type="submit"  value="前へ" onClick={this.doBefore}/>
        <input type="submit"  value="次へ" onClick={this.doNext}/>

        <img src={Icon}  alt="アイコン" />

      </div>
    );
  }

}

export default connect((state)=>state)(ContentForm);