import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import HomeWorkIcon from '@material-ui/icons/HomeWork';

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  adminlogOut(e) {
    e.preventDefault()
    localStorage.removeItem('admintoken')
    this.props.history.push(`/`)
  }


  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
          <button class="btn btn-outline-success">Login</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
          <button class="btn btn-success">Sign Up</button>
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/profile" className="nav-link">
          <button class="btn btn-outline-success">Profile</button>
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
          <button class="btn btn-success"> Logout</button>
          </a>
        </li>
      </ul>
    )

    const adminLink = (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/adminProfile" className="nav-link">
              <button class="btn btn-outline-success">Admin</button>
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.adminlogOut.bind(this)} className="nav-link">
            <button class="btn btn-success"> Logout</button>
          </a>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed">
        <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
              <h6 className="logo"><HomeWorkIcon  fontSize="small"/> Rent</h6><h6 className="logo2">Oye!</h6>
              </Link>
            </li>
          </ul>
          <button
          className="navbar-toggler ml-auto custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="toggler-icon"><i class="fa fa-bars"></i></div>
        </button>


        <div
          className="collapse navbar-collapse"
          id="navbarsExample10"
        >
          
            <div className="navbarContent">{localStorage.admintoken ? adminLink:localStorage.usertoken ? userLink : loginRegLink}</div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
