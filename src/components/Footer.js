import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
        <img target="_blank"src={require('./instagram.jpg')} onClick={() => window.open("https://www.instagram.com/rajveer_sidhu_12","_blank")} style={{width:"4vw",height:"7vh",borderRadius:"4vw",marginLeft:"2rem",marginBottom:"2vh", transition: "transform 0.5s", transform: "rotate(0deg)"}} alt=""
  onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(360deg)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg)"}
/>
<img target="_blank"src={require('./linkdin.png')} onClick={() => window.open("https://www.linkedin.com/in/rajveer-singh-sidhu-534a25232","_blank")} style={{width:"4vw",height:"7vh",borderRadius:"4vw",marginLeft:"2rem",marginBottom:"2vh", transition: "transform 0.5s", transform: "rotate(0deg)"}} alt=""
  onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(360deg)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg)"}
/>

<img target="_blank"src={require('./twitter.png')} onClick={() => window.open("https://twitter.com/Rajveer810214?t=EOa00qzs2O9t9YfW4x4CpQ&s=08","_blank")} style={{width:"4vw",height:"7vh",borderRadius:"4vw",marginLeft:"2rem",marginBottom:"2vh", transition: "transform 0.5s", transform: "rotate(0deg)"}} alt=""
  onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(360deg)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg)"}
/>
<img target="_blank"src={require('./github.png')} onClick={() => window.open("https://github.com/Rajveer-1","_blank")} style={{width:"4vw",height:"7vh",borderRadius:"4vw",marginLeft:"2rem",marginBottom:"2vh", transition: "transform 0.5s", transform: "rotate(0deg)"}} alt=""
  onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(360deg)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg)"}
/>
</div>
        <footer className="bg-light py-3">
  <div className="container">
    <p className="text-center text-secondary">Copyright &copy; LatestNews By <a  href="https://rajveer-1.github.io/Portfolio.github.io/" target="_Blank" style={{color:"hsl(224deg 20% 19%)",fontWeight:"bold"}}>Rajveer Sidhu</a></p>
  </div>
</footer>
      </div>
    )
  }
}

export default Footer
