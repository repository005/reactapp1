import React from 'react';
import NewsItem from './news-item';

const News = (props) => {

  const items = props.news.map((item) => {
    return (
      <NewsItem key={item.id} item={item} />
    )
  });
  
  return <div>
    {items}
  </div>
}

export default News;