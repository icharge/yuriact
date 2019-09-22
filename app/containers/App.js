// @flow
import * as React from 'react';
import Frame from 'theme/frame';

type Props = {
  children: React.Node,
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Frame>{children}</Frame>
      </React.Fragment>
    );
  }
}
