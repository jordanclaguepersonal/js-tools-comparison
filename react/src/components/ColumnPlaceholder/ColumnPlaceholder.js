import React from 'react'
import '../column/column.scss'
import PropTypes from 'prop-types'

class ColumnPlaceholder extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
      columnName: ''
    }

    this.toggleEditingState = this.toggleEditingState.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.createColumn = this.createColumn.bind(this)
  }

  toggleEditingState () {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleInput (event) {
    event.preventDefault()
    this.setState({
      columnName: event.target.value
    })
  }

  createColumn (event) {
    event.preventDefault()
    this.props.handlers.createColumn(this.state.columnName)
    this.setState({
      isEditing: false,
      columnName: ''
    })
  }

  render () {
    return (
      <section className="column col-3">
        <div className="column__panel column__panel--placeholder">

          {this.state.isEditing && (
            <div className="input-group">
              <input onInput={this.handleInput} type="text" className="form-control" placeholder="Column name" />
              <div className="input-group-append">
                {this.state.columnName.length
                  ? <button onClick={this.createColumn} className="btn btn-success" type="button">Create</button>
                  : <button onClick={this.toggleEditingState} className="btn btn-danger" type="button">Cancel</button>
                }
              </div>
            </div>
          )}

          {!this.state.isEditing && (
            <span onClick={this.toggleEditingState}>Click to add column...</span>
          )}

        </div>
      </section>
    )
  }
}

ColumnPlaceholder.propTypes = {
  handlers: PropTypes.object
}

export default ColumnPlaceholder
