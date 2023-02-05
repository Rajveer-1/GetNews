
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer'

export class App extends Component {
  render() {
    return (
    <div>
    
        <Navbar title="Latest News"/>
        <div style={{ backgroundColor: "hsl(224deg 20% 19%)", height: "100%" }}>
        <News/>
      {/* Your components go here */}
      <Footer/>
    </div>
        
        </div>
    )
  }
}

export default App
