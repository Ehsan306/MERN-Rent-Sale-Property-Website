import React, { Component } from 'react'
import AdminSidebar from './adminSidebar';
import axios from 'axios'
import HomeWorkIcon from '@material-ui/icons/HomeWork';
export default class adminProfile extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          propertyCount: [],
          userCount: []
        };
      }
      componentDidMount() {
        axios.get('http://localhost:5000/properties/countProperty/')
          .then(res => {
            this.setState({
              propertyCount: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })

          axios.get('http://localhost:5000/users/countUsers/')
          .then(res => {
            this.setState({
              userCount: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      
          
    render() {
        return (
            <div>
                  <div className="row">
                        <div className="col-4">
                            <AdminSidebar />
                        </div>
                        <div className="col-7">
                            <div className="container">
                                <br/>
                                <br/>
                                <div className="adminLogo text-center">
                                    <h1 className="logo"><HomeWorkIcon  fontSize="large"/> Rent</h1><h1 className="logo2">Oye!</h1>
                                </div>
                                <h3 className="mt-5 text-center"><b>Welcome to Admin Dashboard</b></h3>
                                    <div className="row">
                                            <div className="col-12">
                                            <div class="card-deck">
                                                    <div class="card bg-info">
                                                        <div class="card-body text-center">
                                                        <p class="card-text"><b>Total Users</b> <br/> {this.state.userCount}</p>
                                                        </div>
                                                    </div>
                                                <div class="card bg-light">
                                                    <div class="card-body text-center">
                                                    <p class="card-text"><b>Total Properties</b> <br/> {this.state.propertyCount}</p>
                                                    </div>
                                                </div>
                                        </div>
                                            </div>
                                        <br/>
                                    </div>
                                
                            </div>
                        </div>    
                  </div>  
            </div>
        )
    }
}
