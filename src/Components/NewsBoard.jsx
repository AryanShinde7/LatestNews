import React from "react";
import NewsItems from "./NewsItems";
import { useState , useEffect } from "react";

function NewsBoard({category}) {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=345c3759336e477883a110937e10c1ca`
    fetch(url).then(response => response.json()).then(data => setarticles(data.articles)).catch(err => console.log(err))
  }, [category]);

  return (
    <div>
        <br />
      <h2 className="text-center">
        LATEST <span className="badge bg-danger">NEWS</span>
      </h2>
     {articles?(articles.map((news , index) =>{
        return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })):<p>LOADING .....</p>}
    </div>
  );
}

export default NewsBoard;
