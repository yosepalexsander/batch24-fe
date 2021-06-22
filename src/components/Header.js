import { Component } from "react";
import brand from '../assets/images/brand.svg';


const Header = () => {
  const title = "Dumbways Batch 24";

  const displayTitle = () => {
    return "Dumbways Batch 24"
  }

  return (
      <header className="header">
        <img style={{width: "138px", height: "71px"}}src={brand} alt="brand" />
        <input type="text"/>
        <div className="buttonContainer">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </header>
  )
}

// class Header extends Component {
//   constructor(props) {
//     super();
//     this.title = "Dumbways Batch 24"
//   }
  
//   render() {
//     return (
//       <header className="header">
//         <h1>{this.title}</h1>
//       </header>
//     )
//   }
// }

export default Header;