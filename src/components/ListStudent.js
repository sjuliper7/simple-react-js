import React, {Component} from 'react';

class ListStudent extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div class="container">
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th>
                  Student Name
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.students.map(student => {
                return  <tr><td>{student}</td></tr>
              })}
            </tbody>
          </table>
      </div>
    )
  }
}

export default ListStudent
