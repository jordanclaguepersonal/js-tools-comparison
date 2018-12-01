import React from 'react'
import './ColumnContainer.scss'
import Column from '../Column/Column.js'
import ColumnPlaceholder from '../ColumnPlaceholder/ColumnPlaceholder'
import PropTypes from 'prop-types'

class ColumnContainer extends React.Component {
  constructor(props) {
    super(props)

    this.getTasksForColumn = this._getTasksForColumn.bind(this)
  }

  _getTasksForColumn (columnId) {
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
                           data={column}
                           tasks={this._getTasksForColumn(column.id)}
                           handlers={this.props.handlers} />
          })}

          {this.props.columns.length < 4 && (
            <ColumnPlaceholder handlers={this.props.handlers} />
          )}

        </div>
      </main>
    )
  }
}

ColumnContainer.propTypes = {
  columns: PropTypes.array,
  tasks: PropTypes.array,
  handlers: PropTypes.object
}

export default ColumnContainer
