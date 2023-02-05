import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {
  render() {
    let {title} = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <img src={require('./NewsImage.jpg')} className="navbar-logo" alt="" />
            <a className="navbar-brand" style={{color:"black"}}>{title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active"  style={{color:"black"}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  style={{color:"black"}}>About</a>

                </li>
              </ul>

            </div>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
