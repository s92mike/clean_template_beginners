import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return(<div className="card">
            <h3 className="card-header">Header Hell0 WorLd!!!</h3>
            <div className="card-body">
                <h5 className="card-title">Title </h5>
                <p className="card-text">Lorim IpsumLorim IpsumLorim IpsumLorim IpsumLorim IpsumLorim Ipsum</p>
                <a href="#" className="btn btn-primary">Go to the world</a>
            </div>  
        </div>) 
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))