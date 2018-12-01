import React from 'react'

class TaskPlaceholder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false,
      title: '',
      description: ''
    }

    this.createTask = this.createTask.bind(this)
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this)
    this.toggleEditingState = this.toggleEditingState.bind(this)
  }

  toggleEditingState() {
    let currentState = this.state.isEditing
    this.setState({
      isEditing: !currentState
    })
  }

  handleTitleInput (event) {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionInput (event) {
    this.setState({
      description: event.target.value
    })
  }

  createTask (event) {
    event.preventDefault()
    this.props.createTask(this.props.columnId, this.state.title, this.state.description)
    this.setState({
      isEditing: false,
      title: '',
      description: ''
    })
  }

  render () {
    return (
      <article className="task task--placeholder">
        <div className="form-group">
          {!this.state.isEditing && (
            <p onClick={this.toggleEditingState}>Click to add task...</p>
          )}
          {this.state.isEditing && (
            <div>
              <input onInput={this.handleTitleInput} type="text" className="form-control mb-3" placeholder="What is the task?" />
              <textarea onInput={this.handleDescriptionInput} className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Any other details..."></textarea>
              {this.state.title.length
                ? <button onClick={this.createTask} className="btn btn-block btn-success" type="button">Create</button>
                : <button onClick={this.toggleEditingState} className="btn btn-block btn-danger" type="button">Cancel</button>
              }
            </div>
          )}
        </div>
      </article>
    )
  }
}

export default TaskPlaceholder
