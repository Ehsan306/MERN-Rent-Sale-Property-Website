import React, { Component } from 'react'
import { login } from './UserFunctions'
import { adminlogin } from './UserFunctions'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    if(user.email==='RentOye@support.com'){

    adminlogin(user).then(res => {
      if (res) {
        this.props.history.push(`/adminProfile`)
      }
    })
  }
else{
  login(user).then(res => {
    if (res) {
      this.props.history.push(`/profile`)
    }
  })
}
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
                <div className="formBanner"><h3 className="text-center font-weight-bold">Login</h3></div>
                <br/>
              <div className="input-group">
              <MailOutlineOutlinedIcon fontSize="large"  className="iconBackground"/>
                <input
                  type="email"
                  class="form-control form-control-sm"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <div className="input-group">
                <LockOutlinedIcon fontSize="large"  className="iconBackground"/>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <button
                type="submit"
                className="btn btn-lg btn-info btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
