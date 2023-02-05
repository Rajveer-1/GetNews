import React, { Component } from 'react'
export class NewsApp extends Component { 
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="container my-2">
      <div className="card  p-3 mb-5" style={{ width: "18rem", transition: "transform 0.5s ease, box-shadow 0.5s ease", boxShadow: "rgb(67 91 75) 0px 4px 8px 0px, rgb(250 250 250 / 99%) 0px 6px 20px 0px", transform: "scale(1)" }} onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "lightgray";
        e.currentTarget.style.boxShadow = "rgb(67 91 75) 0px 4px 8px 0px, rgb(250 250 250 / 99%) 0px 6px 20px 0px;";
        e.currentTarget.style.transform = "scale(1.1)";
      }} onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
        e.currentTarget.style.boxShadow = "rgb(67 91 75) 0px 4px 8px 0px, rgb(250 250 250 / 99%) 0px 6px 20px 0px;";
        e.currentTarget.style.transform = "scale(1)";
      }}>
        <img src={!imageUrl?'https://image.cnbcfm.com/api/v1/image/107182585-1674503135667-gettyimages-1246473901-AFP_337N7QH.jpeg?v=1675412264&w=1920&h=1080':imageUrl} className="card-img-top" ref={img => this.img = img} onError={
          () => this.img.src = 'https://image.cnbcfm.com/api/v1/image/107182585-1674503135667-gettyimages-1246473901-AFP_337N7QH.jpeg?v=1675412264&w=1920&h=1080'
        } style={{ height: "20vh " }} />
        <div className="card-body" style={{ height: "30vh" }}>
          <h5 className="card-title justify-content-center">{title}</h5>
          <p className="card-text justify-content-center">{!description ? "Always read the news to escalate your knowledge, vocabulary and some another things" : description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-dark align-text-bottom" style={{ bottom: "10vh" }}>Read News</a>
        </div>
      </div>
    </div>
    

    )
  }
}
export default NewsApp
