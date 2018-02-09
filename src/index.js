import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return (<div className="h2">
      Hello
    </div>)
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))