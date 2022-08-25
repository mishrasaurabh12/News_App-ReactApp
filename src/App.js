// import logo from './logo.svg';
import './App.css';
import Navbar from './Compents/Navbar';
import News  from './Compents/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  apiKey="a643bfc7ba45429686c7769b0f99c749";
 constructor(){
   super()
   this.state={
     progress:0,
     mode:"light"
   }
 }
// state={
//   progress:0
// }
 setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
 }

  render() {
    return (
      <div>
        <div>
          <Router>
             <LoadingBar
              color='#f11946'
              progress={this.state.progress}  
              //  initial value of progess is passed
            />
            <Navbar />
            <Switch>
              <Route exact path="/">
                <News setProgress={this.setProgress}key="general" pageSize={10} apiKey={this.apiKey} country='in' category="general" />
              </Route>
              <Route exact path="/business">
                <News setProgress={this.setProgress}key="business" pageSize={10} apiKey={this.apiKey} country='in' category="business" />
              </Route>
              <Route exact path="/entertainment">
                <News setProgress={this.setProgress}key="entertainment" pageSize={10} apiKey={this.apiKey} country='in' category="entertainment" />
              </Route>
              <Route exact path="/general">
                <News setProgress={this.setProgress}key="general" pageSize={10} apiKey={this.apiKey} country='in' category="general" />
              </Route>
              <Route exact path="/health">
                <News setProgress={this.setProgress}key="health" pageSize={10} apiKey={this.apiKey} country='in' category="health" />
              </Route>
              <Route exact path="/science">
                <News setProgress={this.setProgress}key="science" pageSize={10} apiKey={this.apiKey} country='in' category="science" />
              </Route>
              <Route exact path="/sports">
                <News setProgress={this.setProgress}key="sports" pageSize={10} apiKey={this.apiKey} country='in' category="sports" />
              </Route>
              <Route exact path="/technology">
                <News setProgress={this.setProgress}key="technology" pageSize={10} apiKey={this.apiKey} country='in' category="technology" />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

