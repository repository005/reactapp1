import React from 'react';

const NewsItem = ({item}) => {
  return (
    <div className="news-item">
      <h4>{item.title}</h4>
      <div>{item.feed}</div>
    </div>
  )
}

export default NewsItem;