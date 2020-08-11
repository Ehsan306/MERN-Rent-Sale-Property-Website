import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class propertyDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property : {},
        };
    }
    render() {
        return (
            <div className="container">
                   <br/>
                   <div className="row">
                       <div className="col-lg-9 col-xl-9 col-12">
                       <div className="row">
                       <br/>
                       <p className="webLocation"><p className="address">Home <i class='fas fa-angle-right'></i>  Property <i class='fas fa-angle-right'></i> <p className="addressDetails">{this.props.location.state.property.title}</p> </p></p>
                   </div>
                   <br/>
                   <div className="row">
                       <div className="col-xs-12 col-md-12 col-sm-12 col-lg-8 col-xl-8">
                              <h4 className="detailTitle"><b>{this.props.location.state.property.title}</b></h4>
                       </div>
                       <div className="col-xs-12 col-md-12 col-sm-12 col-lg-4 col-xl-4">
                              <p className="price">Rs {this.props.location.state.property.price}</p>
                       </div>
                   </div>
                   <div className="row">
                       <div className="container"><p className="address"><i class='fas fa-map-marker-alt'></i> {this.props.location.state.property.address},{this.props.location.state.property.location} </p></div>
                   </div>
                   <br/>
                       <div className="line2"></div>
                   <br/>
                   <div className="detailTypes">
                       <p className="row">
                       <div class="col-4"><p class="park"><b>Status</b> {this.props.location.state.property.Type} </p></div>
                       <div class="col-4"><p><p class="park">P</p> {this.props.location.state.property.parking} Parking</p></div>
                       <div class="col-4"><p><i class="fa fa-bed"></i> {this.props.location.state.property.rooms} Bedrooms</p></div>
                       </p>
                   </div>
                   <div className="line2"></div>
                   <br/>
                   <div className="row">
                   <div className="container">
                   <div className="slideShow">
          <div className="row">
              <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className="imgText">
                <img src={'http://localhost:5000/uploads/'+this.props.location.state.property.upload} alt=" "/>
                </div>
                <div className="imgText">
                    <img src={'http://localhost:5000/uploads/'+this.props.location.state.property.upload1} alt=" "/>
                </div>
                <div className="imgText">
                    <img src={'http://localhost:5000/uploads/'+this.props.location.state.property.upload2} alt=" "/>
                </div>
            </Carousel>
        </div>
              </div>
      </div>
                   </div>
                   </div>
                     <div className="row">
                         <div className="pages mt-4">
                             <br/>
                             <div className="propertyDetails">
                             <h4 className="price">Property Description</h4>
                             <p className="description"> {this.props.location.state.property.details} </p>
                             </div>
                         </div>
                     </div>

                       </div>
                       <div className="col-lg-3 col-xl-3 col-12"></div>
                   </div>
            </div>
        )
    }
}
