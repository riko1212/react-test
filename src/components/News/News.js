import React from 'react';
import Article from './Article/Article';
import SectionTitle from '../Home/MainSection/SectionTitle/SectionTitle';
import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=f22bcc2fb9a54185b76491b9c353d894';
    fetch(url)
      .then(res => res.json())
      .then(el => this.setState({ articles: el.articles }));
  }

  render() {
    return (
      <section className="News">
          <div className="container">
            <SectionTitle label="News"/>
            <div className="news-articles">
            { this.state.articles.map((article, index) =>
                <Article key={index}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    author={article.author}
                    urlToImage={article.urlToImage}
                />
                )}
            </div>
          </div>
        

        
      </section>
    );
  }
}

export default News;
