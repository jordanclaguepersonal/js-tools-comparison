import React from 'react'
import './ColumnContainer.scss'
import Column from '../Column/Column.js'
import ColumnPlaceholder from '../ColumnPlaceholder/ColumnPlaceholder'

class ColumnContainer extends React.Component {
  constructor(props) {
    super(props)
    this.getTasksForColumn = this.getTasksForColumn.bind(this)
  }

  getTasksForColumn (columnId) {
    return this.props.tasks.filter((task) => {
      return task.column === columnId
    })
  }

  render () {
    return (
      <main className="columnContainer">
        <em className="columnContainer__summary">You have used {this.props.columns.length} out of a possible 4 columns.</em>
        <div className="columnContainer__content row">
          {this.props.columns.map((column, index) => {
            return <Column key={index}
                           column={column}
                           tasks={this.getTasksForColumn(column.id)}
                           deleteColumn={this.props.deleteColumn}
                           createTask={this.props.createTask}
                           deleteTask={this.props.deleteTask}
                           updateTaskColumn={this.props.updateTaskColumn} />
          })}
          {this.props.columns.length < 4 && (
            <ColumnPlaceholder createColumn={this.props.createColumn} />
          )}
        </div>
      </main>
    )
  }
}

export default ColumnContainer
