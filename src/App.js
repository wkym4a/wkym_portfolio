import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import HeadForm from './portfolio/HeadForm';
import ContentForm from './portfolio/ContentForm';

import { Button,Row,Col } from "react-bootstrap";

import TestForm from './TestForm';

import "bootstrap/dist/css/bootstrap.min.css";

// Appコンポーネント
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h5 className="title">若山侑輝のポートフォリオ集</h5>
        </div>

        <br></br>
        <HeadForm />
        <br></br><br></br>
        <ContentForm />

      </div>
    )
      
  }
}

export default connect()(App);
// export default App;
