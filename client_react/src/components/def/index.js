import React, { Component } from "react";



class Def extends Component {

  render () {
    return (
    <div>
      
      <p>
        {this.props.data.definition}
      </p>
      
    </div>
    )
  }
}
export default Def;