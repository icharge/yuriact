import React from 'react';
import borderTopLeft from 'app/assets/images/border-top-left.png';
import borderTop from 'assets/images/border-top.png';
import borderTopRight from 'assets/images/border-top-right.png';

import 'assets/styles/window-style.scss';

class Frame extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="window-frame">
        <div className="row top window-draggable-zone">
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
      </div>
    );
  }
}

export default Frame;
