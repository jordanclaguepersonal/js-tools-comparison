import React from 'react'
import './Task.scss'

class Task extends React.Component {
  constructor (props) {
    super(props)

    this.handleDragStart = this.handleDragStart.bind(this)
  }

  handleDragStart (event) {
    event.dataTransfer.setData('text', JSON.stringify(this.props.task))
  }

  render () {
    const { deleteTask } = this.props.handlers

    return (
      <article className="task task" draggable="true" onDragStart={this.handleDragStart}>
        <button onClick={() => deleteTask(this.props.task.id)} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h3 className="task__title">{this.props.task.title}</h3>
        <p className="task__description">
          {this.props.task.description}
        </p>
      </article>
    )
  }
}

export default Task
