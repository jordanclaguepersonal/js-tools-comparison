import React from 'react'
import './App.scss'
import ColumnContainer from '../ColumnContainer/ColumnContainer'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      columns: [],
      tasks: []
    }

    this.handlers = {
      createColumn: this.createColumn.bind(this),
      deleteColumn: this.deleteColumn.bind(this),
      createTask: this.createTask.bind(this),
      deleteTask: this.deleteTask.bind(this),
      moveTask: this.moveTask.bind(this)
    }
  }

  createColumn (columnName = 'Unknown') {
    const nextId = this.state.columns.length + 1
    const newColumns = [
      ...this.state.columns,
      {
        id: nextId,
        label: columnName
      }
    ]

    return this.setState({
      columns: newColumns
    })
  }

  deleteColumn (columnId) {
    // For now, let's just orphan tasks.
    const tasksInColumn = this.state.tasks.filter(task => {
      return task.column === columnId
    })

    tasksInColumn.forEach(taskInColumn => {
      this.deleteTask(taskInColumn.id)
    })

    const remainingColumns = this.state.columns.filter(column => {
      return columnId !== column.id
    })

    return this.setState({
      columns: remainingColumns
    })
  }

  createTask (columnId, taskTitle, taskDescription) {
    const nextId = this.state.tasks.length + 1
    return this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: nextId,
          column: columnId,
          title: taskTitle,
          description: taskDescription
        }
      ]
    })
  }

  deleteTask (taskId) {
    const remainingTasks = this.state.tasks.filter(task => {
      return taskId !== task.id
    })

    return this.setState({
      tasks: remainingTasks
    })
  }

  moveTask (taskId, newColumnId) {
    let tasks = this.state.tasks.map((task, index) => {
      if (task.id === taskId) task.column = newColumnId
      return task
    })

    return this.setState({
      tasks: tasks
    })
  }

  render () {
    return (
      <div className="container">
        <header className="container--header">
          <h1>React Planner</h1>
        </header>
        <div className="appContainer">
          <ColumnContainer columns={this.state.columns}
            tasks={this.state.tasks}
            handlers={this.handlers} />
        </div>
      </div>
    )
  }
}

export default App
