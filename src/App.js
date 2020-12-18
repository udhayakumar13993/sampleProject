import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component{
  constructor(){

    super()
    this.state={
      count:1
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({
      count:this.state.count+1
    })
    }
  
  render(){
    return(

      <div>
        {this.state.count}
        <button onClick={this.handleChange}/>
      </div>
    )

  }
}
export default App;
