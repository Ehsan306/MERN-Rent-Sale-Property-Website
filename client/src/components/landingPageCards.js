import React, { Component } from 'react'
import axios from 'axios';
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import FilteredProperty from './filteredProperty'
export default class allPropertyList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          property: [],
          filteredProperty: [],
          filterLocation: '',
          filterFlag: false,
          pageOfItems: []
        };

        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
      }

      onChangeLocation(e) {
        this.setState({filterLocation: e.target.value})
    }
      onChangePage(pageOfItems){
          this.setState({pageOfItems: pageOfItems})
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

      filterLocation(){
        axios.get('http://localhost:5000/properties/searchLocation'+ this.state.location)
          .then(res => {
            this.setState({
              filteredProperty: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    render() {
        return (
            <div className="container">
                <div className="filterBox">
                  <div className="input-group">
                  <input type="text" placeholder="Enter City..." className="form-control form-control-lg" value={this.state.filterLocation}
                    onChange={this.onChangeLocation}></input>
                  <button class="btn btn-success btn-lg"  onClick={()=>{this.setState({filterFlag:!this.state.filterFlag})}}>{ this.state.filterFlag? 'Reset' : 'Search'}</button>
                  </div>
                </div>
                {
                  this.state.filterFlag? <div>
                    <h3 className="text-center">
                      <b>Following are the posts for the city : "{this.state.filterLocation}"</b>
                    </h3>
                    <FilteredProperty location={this.state.filterLocation} />
                    
                  </div> : 
                  <div>
                    <br/>
                <br/>
                <div className="row">
                <div className="text-center">
                    <div className="container">
                        <div className="row">
                        
                        {this.state.pageOfItems.map(item =>
                            <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4">

                                <div class="card">
                                  <div className="cardHead">
                                    <img src={'http://localhost:5000/uploads/'+item.upload} alt="Denim Jeans" />
                                    <div className="status">{item.Type} </div>
                                    <div class="content1">
                                      <div className="row">
                                          <div className="col-6"><p class="text-center"> <p class="park">P</p> {item.parking} </p></div>
                                          <div className="col-6"><p class="text-center"> <i class="fa fa-bed"></i> {item.rooms}</p></div>
                                      </div>
                                    
                                    </div>
                                  
                                  </div>
                                  <div className="cardBody">
                                    <p class="title">{item.title}</p>
                                    <div className="line"></div>
                                    <p class="address"><i class='fas fa-map-marker-alt'></i> {item.address},{item.location} </p>
                                    <p class="price">Rs {item.price} </p>
                                    <Link to= {{
                                      pathname: "/propertyDetailPage",
                                      state:{
                                         property: item
                                        }
                                    }}><button class="btn btn-default btn-block"> 
                                            VIEW DETAIL    
                                    </button>
                                    </Link>
                                          <p class="address text-right"> <i class='fas fa-user'></i> {item.posterName}</p>
                                        
                                  </div>
                              </div>
                            </div>
                        )}
                          </div>
                      </div>
                    </div>
                </div>
                <br/>
                <div className="row"><Pagination items={this.state.property} onChangePage={this.onChangePage} /></div>
                  </div>
                }
                
                
            </div>
        )
    }
}

