import React, { Component } from 'react'
import './Counter.css'

export default class counter extends Component {

    constructor(props) {
        super(props);
        this.person = {fullName: 'Albert Einstein', profession: 'Physicien théoricien' , bio : 'Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton.', imgSrc : 'http://i.insider.com/5eea91594dca6834276c1f24?width=700'}
        this.state ={count: 0}
    }
    componentDidMount(){
        setInterval(()=>{
          this.setState(prevstate =>({
            count: prevstate.count +1
        }))
        },1000);
      }
    
  render() {
     return (
      <div className='count'>
        <h2 className='text'>{this.person.fullName}</h2>
        <h1 className='text'>{this.person.profession}</h1>
        <h3 className='text'>{this.person.bio}</h3>
        <img className='img' src={this.person.imgSrc} alt = 'image1'/>
        <h4 className='text'>{this.state.count}</h4>

        
      </div>
    )
  }
}