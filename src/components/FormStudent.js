import React, {Component} from 'react';

class FormStudent extends Component {
  constructor() {
      super()
      this.state = {
        currentStudentName : ''
      }
  }

  addNewStudent(){
    this.props.addStudent(
      this.state.currentStudentName
    )
  }

  render(){
    return (
      <div>
        <span>{this.state.currentStudentName}</span><br/>
        <input
          type="text"
          name="student_name"
          onChange={(e) => this.setState({
            currentStudentName : e.target.value
        })} />
        <br/><br/>
        <input
          type="button"
          class="btn btn-primary"
          value="Add Student"
          onClick = {() => this.addNewStudent()}
          />
      </div>
    )
  }
}

export default FormStudent
