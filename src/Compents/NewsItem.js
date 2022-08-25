import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, publishedAt,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
            <p className="card-text"><small class="text-muted">By {author} published at:{publishedAt}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
