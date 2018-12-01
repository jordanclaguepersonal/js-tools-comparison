import React from 'react'
import '../column/column.scss'

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
    let currentState = this.state.isEditing
    this.setState({
      isEditing: !currentState
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
    this.props.createColumn(this.state.columnName)
    this.setState({
      isEditing: false,
      columnName: ''
    })
  }

  render () {
    return (
      <section className="column col-3">
        <div className="column__panel column__panel--placeholder">
          {!this.state.isEditing && (
            <p onClick={this.toggleEditingState}>Click to add column...</p>
          )}
          {this.state.isEditing && (
            <div className="input-group mb-3">
              <input onInput={this.handleInput} type="text" className="form-control" placeholder="Column name" />
              <div className="input-group-append">
                {this.state.columnName.length
                  ? <button onClick={this.createColumn} className="btn btn-success" type="button">Create</button>
                  : <button onClick={this.toggleEditingState} className="btn btn-danger" type="button">Cancel</button>
                }
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default ColumnPlaceholder
