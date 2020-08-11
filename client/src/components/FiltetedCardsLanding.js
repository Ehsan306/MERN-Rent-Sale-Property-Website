import React, { Component } from 'react'

export default class FiltetedCardsLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: []
        }

        this.setState({
            property: this.props.obj
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                <div className="text-center">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4">

                                <div class="card">
                                  <div className="cardHead">
                                    <img src={'http://localhost:5000/uploads/'+this.props.obj.upload} alt="Denim Jeans" />
                                    <div className="status">{this.props.obj.Type} </div>
                                    <div class="content1">
                                      <div className="row">
                                          <div className="col-6"><p class="text-center"> <p class="park">P</p> {this.props.obj.parking} </p></div>
                                          <div className="col-6"><p class="text-center"> <i class="fa fa-bed"></i> {this.props.obj.rooms}</p></div>
                                      </div>
                                    
                                    </div>
                                  
                                  </div>
                                  <div className="cardBody">
                                    <p class="title">{this.props.obj.title}</p>
                                    <div className="line"></div>
                                    <p class="address"><i class='fas fa-map-marker-alt'></i> {this.props.obj.address},{this.props.obj.location} </p>
                                    <p class="price">Rs {this.props.obj.price} </p>
                                    <button class="btn btn-default btn-block"> 
                                            VIEW DETAIL    
                                    </button>
                                    
                                          <p class="address text-right"> <i class='fas fa-user'></i> {this.props.obj.posterName}</p>
                                        
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
