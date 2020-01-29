import React from 'react'

class Element extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: 'green'
      }
    }
  }
  render() {
    return (
      <div style={this.state.style}></div>
    )
  }
}

export default Element