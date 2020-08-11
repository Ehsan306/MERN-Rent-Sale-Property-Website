import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import FormData from "form-data"

export default class createProperty extends Component {
    constructor(props) {
        super(props)
        this.state = {
          title: null,
          details: null,
          location: null,
          price: null,
          posterId: '',
          posterName: '',
          Type: null,
          upload: null,
          upload1: null,
          upload2: null,
          rooms: null,
          address: null,
          parking: null,
        }
        
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
          posterId: decoded._id,
          posterName: decoded.first_name + ' ' + decoded.last_name
        })
      }
            
      onSubmit = e => {
        e.preventDefault()
            const formData = new FormData();
            formData.append("file",  e.target.attachment.files[0])
            formData.append("file",  e.target.attachment.files[1])
            formData.append("file",  e.target.attachment.files[2])
            formData.append("title", e.target.title.value)
            formData.append("location", e.target.location.value)
            formData.append("rooms", e.target.rooms.value)
            formData.append("price", e.target.price.value)
            formData.append("details", e.target.details.value)
            formData.append("parking", e.target.parking.value)
            formData.append("Type", e.target.Type.value)
            formData.append("address", e.target.address.value)
            formData.append("posterId", this.state.posterId)
            formData.append("posterName", this.state.posterName)
        
        axios.post('http://localhost:5000/properties/createProperty', formData,{
            headers: {
              'content-type':"'multipart/form-data';"
            }
        })
        .then(res => {
            this.props.history.push(`/profile`)
            console.log(res.data)
        }
        );
      }


    render() {
        return (
            <div className="container">
                <div className="pages mt-4">
                
                <div className="container">
                <br/>
                    <h5>Property Information</h5>
                    <div className="line"></div>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        
                        <div className="container">
                            <div className="row">
                                <p className="formLabels">Property Title</p>
                                <input
                                    type="text"
                                    placeholder="Enter a title"
                                    className="form-control form-control-sm"
                                    required
                                    name="title"
                                    onChange={this.onChangePropertyTitle}
                                />
                            </div>
                            <br/>
                            <div className="row">
                                <p className="formLabels">Description</p>
                                <textarea class="form-control" rows="4" placeholder="Enter Details or Amenities of your property" required
                                onChange={this.onChangePropertyDetails} name="details"></textarea>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                <p className="formLabels">Location</p>
                                <select className="form-control form-control-sm" name="location" id="Location" required
                                onChange={this.onChangePropertyLocation}>
                                    <option value="" disabled selected>Select The City</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Faisalabad">Faisalabad</option>
                                    <option value="Gujranwala">Gujranwala</option>
                                    <option value="Gujrat">Gujrat</option>
                                    <option value="Jalalpur">Jalalpur</option>
                                    <option value="Jaranwala">Jaranwala</option>
                                    <option value="Jhang">Jhang</option>
                                    <option value="Jhelum">Jhelum</option>
                                    <option value="Kasur">Kasur</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Multan">Multan</option>
                                    <option value="Murree">Murree</option>
                                    <option value="Muridke">Muridke</option>
                                    <option value="Mianwali Bangla">Mianwali Bangla</option>
                                    <option value="Muzaffargarh">Muzaffargarh</option>
                                    <option value="Narowal">Narowal</option>
                                    <option value="Okara">Okara</option>
                                    <option value="Rawalpindi">Rawalpindi</option>
                                    <option value="Sheikhupura">Sheikhupura</option>
                                    <option value="Sialkot">Sialkot</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Kashmore">Kashmore</option>
                                </select>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                    <p className="formLabels">Price(Rs)</p>
                                    <input
                                    type="number"
                                    className="form-control form-control-sm"
                                    min="5000"
                                    name="price"
                                    placeholder="Enter Price"
                                    required
                                    onChange={this.onChangePropertyPrice}
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                        <p className="formLabels">Sale or Rent</p>
                                        <select name="Type" className="form-control form-control-sm" required onChange={this.onChangePropertyType}>
                                            <option value="" disabled selected>Sale or Rent</option>
                                            <option value="Sale">For Sale</option>
                                            <option value="Rent">For Rent</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                        <p className="formLabels">Enter Address</p>
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Enter Address"
                                            className="form-control form-control-sm"
                                            required
                                            onChange={this.onChangePropertyAddress}
                                        />
                                    </div>
                            </div>
                            <br/>
                            <div className="row">
                                    <p className="formLabels">Upload Picture</p>
                                    <input className="form-control form-control-sm" type="file"  name="attachment"
                                    multiple />    
                            </div><br/>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                    <p className="formLabels">Number of rooms</p>
                                    <input
                                    type="number"
                                    className="form-control form-control-sm"
                                    placeholder="Enter Number of Rooms"
                                    max="10"
                                    min="1"
                                    name="rooms"
                                    required
                                    onChange={this.onChangePropertyRooms}
                                    />
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                    <p className="formLabels">Parking Lot</p>
                                    <select className="form-control form-control-sm" required
                                    onChange={this.onChangePropertyParking} name="parking">
                                        <option value="" disabled selected>Parking Lot</option>
                                        <option value="Available">Yes</option>
                                        <option value="Not Available">No</option>
                                    </select>
                                </div>

                            </div><br/>
                            <div className="row">
                            <button
                                type="submit"
                                className="btn btn-lg btn-info"
                                >
                                    Submit Property
                                </button>
                            </div>
                        </div>
                        <br/>
                        
                    </form>
                        
                </div>
            </div>
            </div>
        )
    }
}
