import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    console.log("1");
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}|NewsMonkey`;
  }
  // updateUrl = async () => {
  //   console.log("2");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a643bfc7ba45429686c7769b0f99c749&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading: true
  //   })
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState(
  //     {
  //       articles: parsedData.articles,
  //       totalArticles: parsedData.totalResults,
  //       loading: false
  //     }
  //   )
  // }
  async componentDidMount() {
    // console.log("2");
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })

    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState(
      {
        articles: parsedData.articles,
        totalArticles: parsedData.totalResults,
        loading: false
      }
    )
    this.props.setProgress(100);
  }
  // handleNextClick = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a643bfc7ba45429686c7769b0f99c749&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //     this.setState({
  //       loading: true
  //     })
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     // console.log(parsedData);
  //     this.setState(
  //       {
  //         page: this.state.page + 1,
  //         articles: parsedData.articles,
  //         loading: false
  //       }
  //     )
  //   }
  //   // this.setState({
  //   //   page: this.state.page + 1
  //   // })
  //   // this.updateUrl();
  // }
  // handlePreviousClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a643bfc7ba45429686c7769b0f99c749&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading: true
  //   })
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState(
  //     {
  //       page: this.state.page - 1,
  //       articles: parsedData.articles,
  //       loading: false
  //     }
  //   )
  //   // this.setState({
  //   //   page: this.state.page - 1
  //   // })
  //   // this.updateUrl();
  // }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true
    // })
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState(
      {
        articles: this.state.articles.concat(parsedData.articles),
        totalArticles: parsedData.totalResults,
        // loading: false
      }
    )
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'>{`NewsMonkey|Top-Headlines from ${this.capitalizeFirstLetter(this.props.category)}`}</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={this.state.page<= Math.ceil(this.state.totalArticles / this.props.pageSize)&& <Spinner />}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://img.etimg.com/thumb/msid-91711122,width-1070,height-580,imgsize-2155739,overlay-ettech/photo.jpg"} url={element.url} author={element.author ? element.author : "Unknown"} publishedAt={new Date(element.publishedAt).toUTCString()} source={element.source.name} />
              </div>
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&#8592;previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&#8594;</button>
        </div> */}
      </div>
    )
  }
}
