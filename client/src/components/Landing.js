import React, { Component } from 'react'
import Posts from './landingPageCards'
class Landing extends Component {
  render() {
    return (
      <div>
            <div className="container">
              <h2 className="text-center mt-5">
                <b>Welcome to RentOye</b>
              </h2>
            </div>
            <br/>
            <div className="row">
              <Posts />
            </div>
            
      </div>
    )
  }
}

export default Landing
