import React, { Component } from "react";
import "./Icon.css";

// class Icon extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false,
//     };
//   }

//   expandCollapse = () => {
//     let value;
//     if (this.props.collapsed === "collapsed") {
//       value = "expanded";
//     } else {
//       value = "collapsed";
//     }
//     this.props.returnToParent(value);
//   };

//   render() {
//     return (
//       <div className="icon">
//         <img
//           className="logo"
//           src={require("../../../assets/img/Logo.png")}
//           alt="Profile Pic"
//         />
//         <img
//           className="expand"
//           src={require("../../../assets/img/Hamburger_icon.svg")}
//           alt="Borger"
//           onClick={this.expandCollapse}
//         />
//       </div>
//     );
//   }
// }

function Icon(props) {
  const expandCollapse = () => {
    let value;
    props.collapsed === "collapsed" ? value = "expanded" : value = "collapsed";
    props.returnToParent(value);
  };
  
  return (
    <div className="icon">
      <img
        className="logo"
        src={require("../../../assets/img/Logo.png")}
        alt="Profile Pic"
      />
      <img
        className="expand"
        src={require("../../../assets/img/Hamburger_icon.svg")}
        alt="Borger"
        onClick={expandCollapse}
      />
    </div>
  );
}

export default Icon;
