import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
//COMPONENTS
import Header from './components/header';
import News from './components/news';

class App extends React.Component {

  state = {
    news: JSON
  }
  render() {
    return (
      <div>
        <Header />
        <News news={this.state.news}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

