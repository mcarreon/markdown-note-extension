import React, { Component } from 'react';
import Note from './Note.js';

export default class Notes extends Component {
  
  render() {

    let { notes } = this.props;

    return (
      <div className="note-area">
        { notes.map((note, i) => {

          return <Note note={note} updateNote={this.props.updateNote} updateNoteTitle={this.props.updateNoteTitle} deleteNote={this.props.deleteNote} index={i} key={`note-${i}`}/>;
        })}
      </div>
    )
  }
}
