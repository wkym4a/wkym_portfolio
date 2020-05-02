import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addMemo } from './Store';

class HeadForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div >
        ヘッド情報{this.props.num}
      </div>
    );
  }

}

export default connect((state)=>state)(HeadForm);