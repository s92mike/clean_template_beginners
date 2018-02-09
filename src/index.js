import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return (<div className="h2">
      Test version 2
    </div>)
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))