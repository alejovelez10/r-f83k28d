import React, { Component } from 'react';
import './App.css';



class App extends Component {
     constructor(){
      super();

      this.state = {
        title: 0
      }

  }

  render() {
    return (
      <div>
        <span className="value">{this.state.title}</span>
        <button  onClick={this.changeTitle.bind(this)} id="inc">Incrementa</button>
      </div>
    );
  }

  changeTitle(){
   this.setState(
   {  title: this.state.title + 1


 })
 }
}

export default App;
