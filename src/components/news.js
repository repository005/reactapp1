import React from 'react';
import NewsItem from './news-item';

const News = (props) => {

  console.log(props.search);

  const items = props.news.map((item) => {
    return (
      <NewsItem key={item.id} item={item} />
    )
  });
  
  return <div  className="news">
    {props.children}
    {items}
  </div>
}

export default News;