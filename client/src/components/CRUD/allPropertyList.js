import React, { Component } from 'react'
import axios from 'axios';
import PropertyTableRow from './PropertyTableRow';
import AdminSidebar from '../adminSidebar'
export default class allPropertyList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          property: []
        };
      }
      componentDidMount() {
        axios.get('http://localhost:5000/properties/')
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
                                    <h5 className="text-left"><br/>Properties Information</h5>
                                </div>
                                
                            </div>
                        </div>
                        <br/>
                        
                        <div className="line"></div>
                        <div className="container">
                            <div className="mx-4">
                                <div className="row">
                                    <div className="col-2"><b className="headings">Posted By</b></div>
                                    <div className="col-4"><b className="headings">Title</b></div>
                                    <div className="col-2"><b className="headings">Location</b></div>
                                    <div className="col-2"><b className="headings">View</b></div>
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
