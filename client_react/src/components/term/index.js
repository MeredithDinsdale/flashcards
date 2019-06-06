import React, { Component } from "react";



class Term extends Component {

  render () {
    return (
    <div>
      <h3>
        {this.props.data.term} 
      </h3>
    </div>
    )
  }
}
export default Term;