import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Form from './components/FormStudent'
import ListStudents from './components/ListStudent'

class App extends Component {
  constructor(){
    super()
    this.state = {
        students : ['Juliper Simanjuntak'],
    }
  }

  addStudent(name){
    let currentStudents  = this.state.students
    currentStudents.push(name)
    this.setState({
      students : currentStudents
    })
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Form addStudent = {(name) => this.addStudent(name)}/>
        <h2>List Sudents</h2>
        <ListStudents students={this.state.students}/>
      </div>
    );
  }
}

export default App;
