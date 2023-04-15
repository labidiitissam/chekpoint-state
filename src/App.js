
import React, { Component } from 'react'
import Counter from './Counter'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show:false
  }};
toglle =() =>{
  this.setState({show:!this.state.show});
}

  render() {
    return (
      <div>
      <button className='btn' onClick={this.toglle}>show</button>
      {this.state.show ?
      <Counter/> : null}
      </div>
    )
  }
}
