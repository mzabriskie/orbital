import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from 'shared/components/Footer';
import Navigation from 'shared/components/Navigation';
import marked from 'marked';
import moment from 'moment';

const ArticleListItem = () => {
  return (
    <li className="Home__ArticleList__Item">
      <time>{moment().format('MMM D, YYYY')}</time>
      <h2><Link to="/articles/article-title">Article Title</Link></h2>
      <h3>Subtitle for the article</h3>
    </li>
  );
};

export default () => {
  var articles = [];
  for (var i=0; i<10; i++) {
    articles.push(<ArticleListItem key={i}/>);
  }

  return (
    <div role="main" className="Home">
      <header>
        <img className="Home__Avatar" src="https://avatars.githubusercontent.com/u/199035?s=150"/>
        <h1>Matt Zabriskie</h1>
        <h4>
          Open source hacker working on axios HTTP client, and <a href="https://twitter.com/reactjs" target="_blank">@reactjs</a> stuff with <a href="https://github.com/rackt" target="_blank">rackt</a>. Co-organizer of <a href="https://twitter.com/ReactRally" target="_blank">@ReactRally</a>, <a href="https://twitter.com/ReactJSUtah" target="_blank">@ReactJSUtah</a>, and <a href="https://twitter.com/lunch_js" target="_blank">@lunch_js</a>.
        </h4>
        <Navigation/>
      </header>
      <div className="content-wrapper">
        <section>
          <ul className="Home__ArticleList">{articles}</ul>
        </section>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
