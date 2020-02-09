import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { Card, Button, H5 } from '@blueprintjs/core';

import * as LoginActions from '../../actions/login';

type Props = {
  gotoLobbyPage: () => void,
};

class LoginPage extends React.Component<Props> {
  props: Props;

  handleLoginClick = e => {
    this.props.gotoLobbyPage();
  };

  render() {
    return (
      <Card>
        <Container fluid style={{ height: '100%' }}>
          <Row justify="center" style={{ height: '100%' }}>
            <Col xs={12}>
              <H5>YuriNET</H5>
              <p>Welcome back</p>
              <Button onClick={this.handleLoginClick}>Login</Button>
              <Button>Quit</Button>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
