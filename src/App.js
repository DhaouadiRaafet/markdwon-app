import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {sampleText} from './sampleText';
import marked from 'marked'

class App extends Component {
  
  state={
    text: sampleText
  }
  componentDidMount(){
    const text=localStorage.getItem('text')
    this.setState({text} ? {text}:{sampleText})
console.log('je suis monté') 
 }
 componentDidUpdate()
 {
   const {text} = this.state
   localStorage.setItem('text',text)
  console.log('je suis modifié') 
 }
 

handleChange=event =>{
  const text=event.target.value;
  this.setState({text})
}

renderText = text => {
  const __html =marked(text ? text : 'empty', {sanitize:true})
    return {__html}
} 
  render() {
    return (
  <div className="container">
  
  
  
  <div className="row">
  <div className="col-sm-6">
<textarea className="form-control" onChange={this.handleChange} value={this.state.text} rows="35"></textarea>
   
</div>

    <div className="col-sm-6">
    <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
    </div>
    </div>
  
  </div>
    );
  }
}

export default App;
