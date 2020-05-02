import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import HeadForm from './portfolio/HeadForm';
import ContentForm from './portfolio/ContentForm';
// import ContentForm from './memo/FindForm';
// import MemoForm from './memo/DelForm';

// Appコンポーネント
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>若山侑輝のポートフォリオ集
              
        <HeadForm />
        <ContentForm />

      </div>
    )
      
  }
}

export default connect()(App);
// export default App;
