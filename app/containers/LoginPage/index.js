// @flow
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card, Button, H5 } from '@blueprintjs/core';

type Props = {};

export default class LoginPage extends React.Component<Props> {
  props: Props;

  render() {
    return (
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
          <Col
            xs={12}
            md={6}
            style={{
              margin: 'auto',
              marginLeft: 'auto !important', // TODO: Use SCSS
            }}
          >
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
