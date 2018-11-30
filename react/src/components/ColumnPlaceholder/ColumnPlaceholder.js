import React from 'react'
import '../column/column.scss'

class ColumnPlaceholder extends React.Component {
  render () {
    return (
      <section className="column col-3">
        <div className="column__panel column__panel--placeholder">
          <p>Click to add column...</p>
        </div>
      </section>
    )
  }
}

export default ColumnPlaceholder
