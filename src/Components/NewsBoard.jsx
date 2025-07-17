// import { response } from "express";
// import { useEffect, useState } from "react";
// import NewsItems from "./NewsItems";

// const NewsBoard=()=>{
//     const [articles,setArticles]=useState([]);
//     useEffect(()=>{
//         let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
//         fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
//     },[])
//   return(
//     <div>
//       <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//       {articles.map((news,index)=>{
//         return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
//       })}
//     </div>
//   )
// }
// export default NewsBoard;

import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="news-container">
        {articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title || "No Title"}
            description={news.description || "No Description"}
            src={news.urlToImage || "https://via.placeholder.com/150"}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;



