import React, {Component} from 'react';

const NewsItem = ({item}) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  )
}

export default NewsItem;