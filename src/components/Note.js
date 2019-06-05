import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Textarea from 'react-textarea-autosize';
import { Button } from '@blueprintjs/core';

export default class Note extends Component {
  
  state = {
    editMode: false,
  }

  handleChange = (e) => {
    this.props.updateNote(e.target.value, this.props.index);
  }

  handleTitleChange = (e) => {
    this.props.updateNoteTitle(e.target.value, this.props.index);
  }

  toggleEdit = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  handleDelete = () => {
    this.props.deleteNote(this.props.index);
  }


  render() {

    let { note } = this.props;
    let { content, title } = note;

    let noteContent = this.state.editMode ? <Textarea onChange={ this.handleChange } value={ content } className="note-textarea"></Textarea> : <div><ReactMarkdown source={content}/></div>;

    let noteTitle = this.state.editMode ? <Textarea onChange={ this.handleTitleChange } value={ title } className="note-titlearea"/> : <h3>{ title }</h3>


    return (
      <div className="note" id={`note-${this.props.index}`}>
        <div className="note-title">
          <Button icon="edit" intent="success" onClick={this.toggleEdit}/>
          {noteTitle}
          <Button icon="delete" intent="danger" onClick={this.handleDelete}/>
        </div>
        <div className="note-content">{noteContent}</div>
      </div>
    )
  }
}
