// @flow
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card, Button, H5 } from '@blueprintjs/core';

type Props = {};

export default class LoginPage extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <Container fluid>
        <Row justify="center">
          <Col xs={12} md={6}>
            <Card>
              <H5>YuriNET</H5>
              <p>Welcome back</p>
              <Button>Login</Button>
              <Button>Quit</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
