import React, { Component } from "react";



class Term extends Component {

  render () {
    return (
    <div>
      <h4>
        {this.props.data.term} 
      </h4>
    </div>
    )
  }
}
export default Term;