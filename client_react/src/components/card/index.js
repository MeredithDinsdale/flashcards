import React, { Component } from "react";
import terms from "../../terms.json";
import Term from "../term";
import Def from '../def';

import './style.css';

class Card extends Component {

  state = {
		termShowing: true,
		termIndex: 0
	  };

 	handleNextStep = event => {
    const { termIndex, termShowing } = this.state;
    
 	  if (termShowing && termIndex < 15) {
 	    this.setState({
         termShowing: false,
       });
 	  }
 	  else if (!termShowing && termIndex < 15) {
 	    this.setState({
         termShowing: true,
 	      termIndex: termIndex +1
       }); 
     }  
     else {
      console.log('out of cards!');
      this.setState({
        termShowing: true,
        termIndex: 0
      })
    }
  }


  render() {
    
    return (<div className="card center-align" onClick={this.handleNextStep}>
      
      <section>

        <div className="term" style={{display: this.state.termShowing ? 'block' : 'none' }}>
            <Term data={terms[this.state.termIndex]} />
            <h1 className="cannabis"><i className="fas fa-cannabis faa-float animated"></i></h1>
        </div>

        <div className="definition" style={{display: this.state.termShowing ? 'none' : 'block' }}>
            <Def data={terms[this.state.termIndex]}/>
        </div>
      </section>  
    </div> )

  }

}
export default Card;


