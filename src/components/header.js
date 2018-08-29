import React,{ Component } from 'react';
import '../css/styles.css';

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'The keywords are: ',
      keywords: ''
    }
  }
  
  inputChangeHandler = (event) => {
    // console.log(event.target.value);
    this.setState({
      keywords: event.target.value
    })
  }

  render() {
    console.log(this.state.keywords);
    return (
      <header>
        <div 
        className="logo">Logo</div>
        <input 
          type="text" 
          onChange = {this.inputChangeHandler}
        />
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
      </header>
    )
  }
}

export default Header;