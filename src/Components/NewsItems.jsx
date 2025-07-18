import image from '../assets/images.jpg'
const NewsItems=({title, description, src, url})=>{
  return(
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"303px"}}>
        <img src={src?src:image} style={{height:"200px",width:"285px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"Read more about NASA Launches New Space Telescope and stay updated with current events."}</p>
            <a href={url} className="btn btn-primary">Read more</a>
        </div>
        </div>
  )
}
export default NewsItems;