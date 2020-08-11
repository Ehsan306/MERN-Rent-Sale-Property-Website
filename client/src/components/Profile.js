import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import { Link } from 'react-router-dom';          
import Myproperty from './CRUD/myProperties';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      contact: '',
      dp: '',
      _id: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      contact: decoded.contact,
      dp: decoded.dp,
      _id: decoded._id
    })
  }

  render() {
    return (
      <div className="pageBody">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div className="row">
                      <img src={'http://localhost:5000/uploads/'+this.state.dp} className="dp" alt=""/>
                  </div>
                  <div className="row">
                      <div className="col-2"><PersonOutlineOutlinedIcon fontSize="small"/></div> <div className="col-10">{this.state.first_name} {this.state.last_name}</div>
                  </div>
                  <div className="row">
                  <div className="col-2"><MailOutlineOutlinedIcon fontSize="small"/></div> <div className="col-10">{this.state.email}</div>
                  </div>
                  <div className="row">
                  <div className="col-2"><PhoneAndroidOutlinedIcon fontSize="small"/></div> <div className="col-10">{this.state.contact}</div>
                  </div>
                  <div className="text-center"><div className="row">
                    
                      <Link to={"/editUser/" + this.state._id}>
                       <button class="btn btn-info">Update</button>
                    </Link>
                    
                </div></div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-8">
                <div className="row">
                  <div className="col-sm-0 col-md-4 col-lg-4 col-xl-4"></div>
                    <div className="row">
                       <Myproperty/>
                    </div>
                </div>
                
            </div>  
          </div>          
      </div>
    )
  }
}

export default Profile
