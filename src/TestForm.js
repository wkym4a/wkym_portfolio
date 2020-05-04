import React from 'react';
import { connect } from 'react-redux';

import { Row,Col } from 'react-bootstrap';

class TestForm extends React.Component {
  render() {
    return (
<Row>
 <Col xs={12} md={6}>
  <a href="https://astatsuya.github.io/transfer/" target="_blank" rel="noopener noreferrer">
    <h4>部署異動の傾向を調べるアプリ</h4>
  </a>
  <br />
  <p>性別、年齢、役職など指定した条件から、異動までの平均年数と異動先を検索する。</p>
  <p>React, Redux, React-Routerを使用。</p>
 </Col>
 <Col xs={12} md={6}>
   sssssssssssssssssssssssssss
 {/* <Image src="../../images/transferimg.png" alt="" responsive thumbnail /> */}
 </Col>
</Row>
    );
  }
}

export default connect()(TestForm);
// export default TestForm;