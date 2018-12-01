import React from 'react'
import Task from '../Task/Task.js'
import TaskPlaceholder from '../TaskPlaceholder/TaskPlaceholder'
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
            <button onClick={() => this.props.deleteColumn(this.props.column.id)} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 className="column__panel-title">
              {this.props.column.label} {this.props.tasks.length ? `(${this.props.tasks.length})` : ''}
            </h2>
          </div>
          <div className="column__panel-content">
            {this.props.tasks.map(task => <Task key={task.id} task={task} deleteTask={this.props.deleteTask}/>)}
            <TaskPlaceholder columnId={this.props.column.id} createTask={this.props.createTask} />
          </div>
        </div>
      </section>
    )
  }
}

export default Column
