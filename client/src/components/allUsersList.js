import React, { Component } from 'react'
import axios from 'axios'
import AdminSidebar from './adminSidebar'
import UserTableRow from './userTableRow';
export default class myProperties extends Component {
    constructor() {
        super()
        this.state = {
          users: []
        }
      }
    
      componentDidMount() {
        
        axios.get('http://localhost:5000/users/')
        .then(res => {
          this.setState({
            users: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
    DataTable() {
      return this.state.users.map((res, i) => {
        return <UserTableRow obj={res} key={i} />;
      });
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
                <div className="container">
                    <div className="pages">
                        <div className="container">
                        <div className="mt-4 mx-4">
                            <div className="row">
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-8 col-xs-8">
                                    <h5 className="text-left"><br/>Users Information</h5>
                                </div>
                                
                            </div>
                        </div>
                        <br/>
                        
                        <div className="line"></div>
                        <div className="container">
                            <div className="mx-4">
                                <div className="row">
                                    <div className="col-2"><b className="headings">Name</b></div>
                                    <div className="col-4"><b className="headings">Email</b></div>
                                    <div className="col-2"><b className="headings">Contact</b></div>
                                    <div className="col-2"></div>
                                    <div className="col-2"><b className="headings">Delete</b></div>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="container">
                            <div className="mt-4 mx-4">
                                {this.DataTable()}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


                </div>
          </div>
          </div>
                    )
    }
}
