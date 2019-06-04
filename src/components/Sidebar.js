import React, { Component } from 'react'
import { Button } from '@blueprintjs/core';

export default class Sidebar extends Component {
  render() {

    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <Button icon="add" text="Add a Note" intent="success" fill="false" onClick={this.props.addNote} />
          <Button icon="help" className="ref-btn" text="Show Reference" intent="primary" fill="false" onClick={this.props.toggleRef} />
        </div>
      </div>
    )
  }
}
