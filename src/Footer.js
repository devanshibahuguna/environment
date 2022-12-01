import React, { Component } from 'react'
export class Footer extends Component {
  render() {
    const mystyle={
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        padding:'20px'
    }
    return (
      <div style={mystyle}>
        Made with love by Team powergirls
      </div>
    )
  }
}

export default Footer
