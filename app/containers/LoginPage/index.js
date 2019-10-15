// @flow
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card, Button, H5 } from '@blueprintjs/core';

type Props = {};

export default class LoginPage extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <Card>
        <Container
          fluid
          style={{
            height: '100%',
          }}
        >
          <Row
            justify="center"
            style={{
              height: '100%',
            }}
          >
            <Col xs={12}>
              <H5>YuriNET</H5>
              <p>Welcome back</p>
              <Button>Login</Button>
              <Button>Quit</Button>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}
