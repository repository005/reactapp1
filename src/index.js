import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
//COMPONENTS
import Header from './components/header';
import News from './components/news';

import './css/styles.css';

class App extends Component {

  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    let keyword = event.target.value.toLowerCase();
    let filtered = this.state.news.filter((item) => {
      return item.title.toLowerCase().indexOf(keyword) > -1;
    })
    this.setState({
      filtered
    })
  }

  render() {
    let newsFiltered = this.state.filtered;
    let newsWhole = this.state.news;
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <News news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
          <h3>The news are:</h3>
        </News>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

