import React, { Component } from 'react'
import { Button } from '@blueprintjs/core';
import classNames from 'classnames';

export default class Sidebar extends Component {
  
  state = {
    minimized: false
  }
  
  handleMinimize = () => {
    this.setState({minimized: !this.state.minimized});
  }


  
  render() {

    let contentClass = classNames({
      minimized: this.state.minimized
    });

    let minimize = this.state.minimized ? <Button icon="plus" intent="primary" minimal="true" className="sidebar-min" onClick={this.handleMinimize}/> : <Button icon="minus" intent="primary" minimal="true" className="sidebar-min" onClick={this.handleMinimize}/>

    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="sidebar-title">
            <h2>Navigation</h2>
            {minimize}
          </div>
          <div className={`sidebar-content ` + contentClass}>
            <div className="table-of-contents">
              <h3>Jump to Note</h3>
              {this.props.notes.map((note, i) => {
  
                return <a href={`#note-${i}`} key={`note-link-${i}`}>{note.title}</a>
              })}
            </div>
            
          </div>
          <div>
            <Button icon="add" text="Add a Note" intent="success" fill="false" onClick={this.props.addNote} />
            <Button icon="help" className="ref-btn" text="Show Reference" intent="primary" fill="false" onClick={this.props.toggleRef} />
          </div>
        </div>
      </div>
    )
  }
}
