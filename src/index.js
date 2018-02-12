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


var {foo, bar: baz} = {foo: 0, bar: 1}
console.log(baz, foo)

var pony = {foo: "pony test", test: "test rah"}
var {foo, test, maker} = pony
console.log(pony)
console.log(foo)

var foo, baz;
var {foo: {bar}} = { foo: { bar: 'baz' } }
console.log(foo)
console.log('{@foo:{bar}} = foo, bar, baz:::', `foo:${foo}`, foo, bar, baz)
pony = {foo: 'test baz'}
var {foo='bar'} = baz
console.log(foo, bar)