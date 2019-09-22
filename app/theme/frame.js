// @flow
import React, { ReactNode } from 'react';
// import type { ReactNode } from 'react';
import borderTopLeft from 'assets/images/border-top-left.png';
import borderTop from 'assets/images/border-top.png';
import borderTopRight from 'assets/images/border-top-right.png';

type Props = {
  children: ReactNode,
};

class Frame extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div className="row top">
          <img className="left" src={borderTopLeft} alt="" />
          <img className="center" src={borderTop} alt="" />
          <img className="right" src={borderTopRight} alt="" />
        </div>
        {/* <ng-content select="header"></ng-content> */}
        {/* <ng-content select="navbar"></ng-content> */}
        <div className="row middle">
          <div className="left" />
          <div className="center">
            <div className="content">{children}</div>
          </div>
          <div className="right" />
        </div>
        <div className="row bottom">
          <div className="left" />
          <div className="center" />
          <div className="right" />
        </div>
      </React.Fragment>
    );
  }
}

export default Frame;
