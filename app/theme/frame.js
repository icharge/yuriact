import React from 'react';
import borderTopLeft from 'assets/images/border-top-left.png';

type Props = {
  children: React.ReactChildren,
};

class Frame extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <>
        <div className="row top">
          <img className="left" src={borderTopLeft} alt="" />
          <img
            className="center"
            src="../../../assets/images/border-top.png"
            alt=""
          />
          <img
            className="right"
            src="../../../assets/images/border-top-right.png"
            alt=""
          />
        </div>
        {/* <ng-content select="header"></ng-content> */}
        {/* <ng-content select="navbar"></ng-content> */}
        <div className="row middle">
          <div className="left" />
          <div className="center">
            <div className="content">
              {/* <ng-content select="router-outlet" /> */}
            </div>
          </div>
          <div className="right" />
        </div>
        <div className="row bottom">
          <div className="left" />
          <div className="center" />
          <div className="right" />
        </div>
      </>
    );
  }
}

export default Frame;
