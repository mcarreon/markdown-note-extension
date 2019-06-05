import React, { Component } from 'react'
import { Button } from '@blueprintjs/core';
import classNames from 'classnames';

export default class RefSidebar extends Component {
  
  state = {
    minimized: false
  }

  handleMinimize = () => {
    this.setState({minimized: !this.state.minimized})
  }
  
  render() {

    let contentClass = classNames({
      minimized: this.state.minimized
    });

    let minimize = this.state.minimized ? <Button icon="plus" intent="primary" minimal="true" className="sidebar-min" onClick={this.handleMinimize}/> : <Button icon="minus" intent="primary" minimal="true" className="sidebar-min" onClick={this.handleMinimize}/>

    return (
      <div className="ref-sidebar">
        <div className="ref">
          <div className="ref-title">
            <h2>Reference</h2>
            {minimize}
          </div>
          <div className={"ref-content " + contentClass}>
            <div>stuff</div>
          </div>
        </div>
      </div>
      
    )
  }
}