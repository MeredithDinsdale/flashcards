import React, { Component } from "react";
import './style.css';

class Header extends Component {

render() {
    return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="headline brand-logo center">FlashCards<i class="fas fa-fire"></i>
     </a>
    </div>
    </nav>
    )};
}

export default Header;