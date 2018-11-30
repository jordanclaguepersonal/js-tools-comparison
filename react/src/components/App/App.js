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
    // this.state = {
    //   columns: [
    //     {
    //       id: 'todo',
    //       label: 'To-Do'
    //     }
    //   ],
    //   tasks: [
    //     {
    //       id: 1,
    //       columnId: 'todo',
    //       title: 'Example task',
    //       description: 'Lorem ipsum dolor sit amet'
    //     }
    //   ]
    // }
  }

  render () {
    return (
      <div className="container">
        <header className="appContainer">
          <h1>React Planner</h1>
          <ColumnContainer columns={this.state.columns} tasks={this.state.tasks} />
        </header>
      </div>
    )
  }
}

export default App
