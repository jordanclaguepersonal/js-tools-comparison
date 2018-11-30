import React from 'react'
import Task from '../Task/Task.js'
import './Column.scss'

class Column extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className="column col-3">
        <div className="column__panel">
          <div className="column__panel-heading">
            <h2 className="column__panel-title">
              {this.props.data.label} {this.props.tasks.length ? `(${this.props.tasks.length})` : ''}
            </h2>
          </div>
          <div className="column__panel-content">
            {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Column
