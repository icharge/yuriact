// @flow
import * as React from 'react';
// import Frame from 'theme/frame';

// import 'assets/styles/yurinet-style.scss';

type Props = {
  children: React.Node,
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}
