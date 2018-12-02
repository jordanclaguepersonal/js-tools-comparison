import React from 'react'
import Task from '../Task/Task.js'
import TaskPlaceholder from '../TaskPlaceholder/TaskPlaceholder'
import './Column.scss'
import PropTypes from 'prop-types'

class Column extends React.Component {
  constructor (props) {
    super(props)

    this.handleDrop = this.handleDrop.bind(this)
    this.handleDragover = this.handleDragover.bind(this)
  }

  handleDrop(event) {
    event.preventDefault()
    const data = event.dataTransfer.getData('text')
    const parsedData = JSON.parse(data)

    return this.props.handlers.moveTask(parsedData.id, this.props.data.id)
  }

  handleDragover(event) {
    event.preventDefault()
  }

  render () {
    const { deleteColumn } = this.props.handlers

    return (
      <section className="column col-3" onDragOver={this.handleDragover} onDrop={this.handleDrop}>
        <div className="column__panel">
          <div className="column__panel-heading">
            <button onClick={() => deleteColumn(this.props.data.id)} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 className="column__panel-title">
              {this.props.data.label} {this.props.tasks.length ? `(${this.props.tasks.length})` : ''}
            </h2>
            <hr/>
          </div>

          <div className="column__panel-content">
            {this.props.tasks.map(task => {
              return <Task key={task.id} task={task} handlers={this.props.handlers} />
            })}
            <TaskPlaceholder columnId={this.props.data.id} handlers={this.props.handlers} />
          </div>
        </div>
      </section>
    )
  }
}

Column.propTypes = {
  data: PropTypes.object,
  tasks: PropTypes.array,
  handlers: PropTypes.object
}

export default Column
