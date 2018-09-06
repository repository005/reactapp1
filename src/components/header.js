import React,{ Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }
  
  inputChangeHandler = (event) => {
    const value = event.target.value === '' ? false : true;
    this.setState({
      active: value
    })
  }

  render() {
    
    return (
      <header style={{background: `${this.state.active ? '#ea0065' : '#0060fc'}`}}>
        <div 
        className="logo">Logo</div>
        <input 
          type="text" 
          onChange = {this.props.keywords}
        />
      </header>
    )
  }
}

export default Header;