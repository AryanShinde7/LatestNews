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
    })):<p>Load</p>}
    </div>
  );
}

export default NewsBoard;

// import React, { useState, useEffect } from "react";
// import NewsItems from "./NewsItems";

// function NewsBoard({ category }) {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//         let apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
//         let response = await fetch(url);
//         let data = await response.json();
//         setArticles(data.articles || []);
//       } catch (error) {
//         console.error("Failed to fetch news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, [category]);

//   return (
//     <div>
//       <br />
//       <h2 className="text-center">
//         LATEST <span className="badge bg-danger">NEWS</span>
//       </h2>
//       {loading ? (
//         <p>LOADING .....</p>
//       ) : (
//         articles.map((news, index) => (
//           <NewsItems
//             key={index}
//             title={news.title}
//             description={news.description}
//             src={news.urlToImage}
//             url={news.url}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default NewsBoard;

