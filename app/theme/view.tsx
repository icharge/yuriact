import React from 'react';

type Props = {
  children: React.ReactDOM,
};

class View extends React.Component<Props> {
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default View;
