import React, { Component } from 'react'
import { Button } from '@blueprintjs/core';
import classNames from 'classnames';
import reference from  '../assets/referenceGuide';
import ReactMarkdown from 'react-markdown';

export default class RefSidebar extends Component {
  
  state = {
    minimized: false,
    refPage: 'toc'
  }

  handleMinimize = () => {
    this.setState({minimized: !this.state.minimized})
  }

  handleRefLink = (e) => {
    this.setState({refPage: e.target.value});
  }

  handleTOC = () => {
    this.setState({refPage: 'toc'});
  }
  
  render() {

    let contentClass = classNames({
      minimized: this.state.minimized
    });

    let minimize = this.state.minimized ? <Button icon="plus" intent="primary" minimal="true" className="sidebar-min" onClick={this.handleMinimize}/> : <Button icon="minus" intent="primary" minimal="true" className="sidebar-min" onClick={this.handleMinimize}/>

    let content = reference.map((ref, index) => {
      return <button onClick={this.handleRefLink} value={index} key={`ref-page-${index}`}>{ref.nav}</button>
    });

    let returnStyle = {
      marginLeft: '5px',
      fontSize: '1.17em',

    }

    let quickLink = this.state.refPage === 'toc' ? <h3>Quick Links</h3> : <button onClick={this.handleTOC} style={returnStyle}>Back to Quick Links</button> 

    if (this.state.refPage !== 'toc') {
      let { refPage } = this.state; 
      let example = reference[refPage].example;

      let style = {
        paddingLeft: '5px',
        overflowY: 'auto',
        maxHeight: '59vh'
      }

      content = <div style={style}><ReactMarkdown source={example} /></div>
    }

    return (
      <div className="ref-sidebar">
        <div className="ref">
          <div className="ref-title">
            <h2>Reference</h2>
            {minimize}
          </div>
          <div className={"ref-content " + contentClass}>
            {quickLink}
            <div className="table-of-contents">
              {content}
            </div>
            <div>
              <p>Reference adapted from Adam Pritchard's <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="__blank">Markdown Cheatsheet</a>.</p>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}