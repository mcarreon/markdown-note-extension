import React, { Component } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar.js';
import Notes from './components/Notes.js';
import RefSidebar from './components/RefSidebar.js';


class App extends Component {

  state = {
    notes: JSON.parse(window.localStorage.getItem('notes')),
    showRef: true
  }

  updateNote = (content, i) => {
    let notesCpy = [...this.state.notes];
    notesCpy[i] = {content: content, title: notesCpy[i].title};
    this.setState({notes: notesCpy});
    window.localStorage.setItem('notes', JSON.stringify(notesCpy));
  }

  updateNoteTitle = ( title, i) => {
    let notesCpy = [...this.state.notes];
    //console.log(title);
    notesCpy[i] = { title: title, content: notesCpy[i].content };
    this.setState({notes: notesCpy});
    window.localStorage.setItem('notes', JSON.stringify(notesCpy));
  }

  deleteNote = (i) => {
    let newNotes = this.state.notes.filter((note, index) => i !== index );
    this.setState({notes: newNotes});
    window.localStorage.setItem('notes', JSON.stringify(newNotes));
  }

  addNote = () => {
    let newNotes = [{title: "New Note", content: "## Add some markdown!"}, ...this.state.notes];
    this.setState({notes: newNotes});
    window.localStorage.setItem('notes', JSON.stringify(newNotes));
  }

  toggleRef = () => {
    this.setState({showRef: !this.state.showRef});
  }

  render () {

    let ref = this.state.showRef ? <RefSidebar /> : <div></div>;

    return (
      <div className="App">
        <Sidebar notes={this.state.notes} addNote={this.addNote} toggleRef={this.toggleRef}/>
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} updateNote={this.updateNote} updateNoteTitle={this.updateNoteTitle} />
        {ref}
      </div>
    );
  }
} 

export default App;
