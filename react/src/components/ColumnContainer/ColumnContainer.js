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
      return task.columnId === columnId
    })
  }

  render () {
    return (
      <main className="columnContainer">
        <em className="columnContainer__summary">You have used {this.props.columns.length} out of a possible 4 columns.</em>
        <div className="columnContainer__content row">
          {this.props.columns.map((column, index) => {
            return <Column key={index} data={column} tasks={this.getTasksForColumn(column.id)} />
          })}
          {this.props.columns.length < 4 && (
            <ColumnPlaceholder />
          )}
        </div>
      </main>
    )
  }
}

export default ColumnContainer
