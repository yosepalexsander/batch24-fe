import { Component, useState } from "react";
import profile from '../assets/images/undraw_Hello_re_3evm.svg';

// class Content extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        status: "guest",
//        name: "",
//        count: 0
//     }

//     this.handleCountMinus = this.handleCountMinus.bind(this);
//     this.handleCountPlus = this.handleCountPlus.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
  
//   handleCountMinus() {
//     this.setState((state) => ({
//       count: --state.count
//     }))
//   }
//   handleCountPlus() {
//     this.setState((state) => ({
//       count: ++state.count
//     }))
//   }

//   handleChange(e) {
//     this.setState({
//       name: e.target.value
//     })
//   }

//   render() {
//     return (
//       <div className="content">
//         <img src={profile} alt="profile"/>
//         <p>{this.props.title}: {this.state.status}</p>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//         <div className="count-container">
//           <button className="btn" onClick={this.handleCountMinus}>-</button>
//           <h2>{this.state.count}</h2>
//           <button className="btn" onClick={this.handleCountPlus}>+</button>
//         </div>
//         <input onChange={this.handleChange} value={this.state.name}/>
//         <p>{this.state.name}</p>
//       </div>
//     )
//   }
// }

const Content = (props) => {
  const {title} = props;
  const [state, setState] = useState({
    status: "guest",
    username: "",
    count: 0
  });

  function handleCountMinus() {
    setState({
      ...state,
      count: --state.count
    })
  }
  function handleCountPlus() {
    setState({
      ...state,
      count: ++state.count
    })
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="content">
      <img src={profile} alt="profile"/>
      <p>{title}: {state.status}</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className="count-container">
        <button className="btn" onClick={handleCountMinus}>-</button>
        <h2>{state.count}</h2>
        <button className="btn" onClick={handleCountPlus}>+</button>
      </div>
      <input onChange={handleChange} value={state.username} name="username"/>
      <p>{state.username}</p>
    </div>
  )
}
    
    
    
export default Content;