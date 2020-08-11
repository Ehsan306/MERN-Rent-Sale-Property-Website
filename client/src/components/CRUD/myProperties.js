import React, { Component } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
import PropertyTableRow from './PropertyTableRow';
export default class myProperties extends Component {
    constructor() {
        super()
        this.state = {
          _id: '',
          property: []
        }
      }
    
      componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
          _id: decoded._id
        })
        axios.get('http://localhost:5000/properties/specificUserPost/'+decoded._id)
        .then(res => {
          this.setState({
            property: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
    DataTable() {
      return this.state.property.map((res, i) => {
        return <PropertyTableRow obj={res} key={i} />;
      });
    }
    
    render() {
        return (
            <div className="container">
                <div className="container">
                    <div className="pages mt-4">
                        <div className="container">
                        <div className="mt-4 mx-4">
                            <div className="row">
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-8 col-xs-8">
                                    <h5 className="text-left"><br/>User Post Information</h5>
                                </div>
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                    <br/>
                                    <Link to="/createProperty">
                                        <button class="btn btn-outline-info btn-md"> Submit Properties </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <br/>
                        
                        <div className="line"></div>
                        <div className="container">
                            <div className="mx-4">
                                <div className="row">
                                    <div className="col-2"><b className="headings">Status</b></div>
                                    <div className="col-4"><b className="headings">Title</b></div>
                                    <div className="col-2"><b className="headings">View</b></div>
                                    <div className="col-2"><b className="headings">Edit</b></div>
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

        )
    }
}
