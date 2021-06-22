import { Component } from "react";
import Header from './components/Header';
import Content from './components/Content';

import './App.css'
import Conditional from "./components/Conditional";
import List from "./components/List";
// class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.headerTitle = "Dumbways Batch 24";
//     this.contentTitle = "Welcome to Dumbways folks!";
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <Header title={this.headerTitle}/>
//         <Content title={this.contentTitle}/>
//       </div>
//     )
//   }
// }


const App = () => {
  const headerTitle = "Dumbways Batch 24";
  const contentTitle = "Welcome to Dumbways folks!";
  return (
    <div className="App">
      <Header title={headerTitle}/>
      {/* <Content title={contentTitle}/> */}
      <Conditional />
      <List />
    </div>
  )
}

export default App;