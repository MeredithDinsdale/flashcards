import React, { Component } from "react";



class Content extends Component {

  render () {
    return (
    <div>
      <h4 class="term">
        {this.props.data.term} 
      </h4>
      <h4 class="definition">
        {this.props.data.definition}
      </h4> 
    </div>
    )
  }
}
export default Content;