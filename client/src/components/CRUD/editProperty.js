import React, { Component } from 'react'
import axios from 'axios';

export default class editProperty extends Component {
    constructor(props) {
        super(props)
    
        this.onChangePropertyTitle = this.onChangePropertyTitle.bind(this);
        this.onChangePropertyDetails = this.onChangePropertyDetails.bind(this);
        this.onChangePropertyLocation = this.onChangePropertyLocation.bind(this);
        this.onChangePropertyType = this.onChangePropertyType.bind(this);
        this.onChangePropertyPrice = this.onChangePropertyPrice.bind(this);
        this.onChangePropertyRooms = this.onChangePropertyRooms.bind(this);
        this.onChangePropertyParking = this.onChangePropertyParking.bind(this);
        this.onChangePropertyAddress = this.onChangePropertyAddress.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          posterId: '',
          title: '',
          details: '',
          location: '',
          price: '',
          Type: '',
          rooms: '',
          address: '',
          parking: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/properties/editProperty/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              posterId: res.data.posterId,
              title: res.data.title,
              location: res.data.location,
              price: res.data.price,
              Type: res.data.Type,
              address: res.data.address,
              parking: res.data.parking,
              rooms: res.data.rooms,
              details: res.data.details
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

            onChangePropertyTitle(e) {
                this.setState({title: e.target.value})
            }
            onChangePropertyDetails(e) {
                this.setState({details: e.target.value})
            }
            onChangePropertyLocation(e) {
                this.setState({location: e.target.value})
            }
            onChangePropertyPrice(e) {
                this.setState({price: e.target.value})
            }
            onChangePropertyType(e) {
                this.setState({Type: e.target.value})
            }
            onChangePropertyRooms(e) {
                this.setState({rooms: e.target.value})
            }
            onChangePropertyParking(e) {
                this.setState({parking: e.target.value})
            }
            onChangePropertyAddress(e) {
                this.setState({address: e.target.value})
            }

      onSubmit(e) {
        e.preventDefault()
    
        const propertyObject = {
            title: this.state.title,
            price: this.state.price,
            details: this.state.details,
            posterId: this.state.posterId,
            location: this.state.location,
            Type: this.state.Type,
            rooms: this.state.rooms,
            address: this.state.address,
            parking: this.state.parking
          };

          axios.put('http://localhost:5000/properties/updateProperty/' + this.props.match.params.id, propertyObject)
          .then((res) => {
            console.log(res.data)
            console.log('Property successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        this.props.history.push('/profile')
      }


      
    render() {
        return (
            <div className="pages mt-4">
                
                <div className="container">
                <br/>
                    <h5>Update Property Information</h5>
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
                                value={this.state.title} onChange={this.onChangePropertyTitle}
                                />
                            </div>
                            <br/>
                            <div className="row">
                                <p className="formLabels">Description</p>
                                <textarea class="form-control" rows="4" placeholder="Enter Details or Amenities of your property" required
                                value={this.state.details} onChange={this.onChangePropertyDetails}></textarea>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                <p className="formLabels">Location</p>
                                <select className="form-control form-control-sm" name="Location" id="Location" required
                                value={this.state.location} onChange={this.onChangePropertyLocation}>
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
                                    placeholder="Enter Price"
                                    required
                                    value={this.state.price} onChange={this.onChangePropertyPrice}
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                            <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                        <p className="formLabels">Sale or Rent</p>
                                        <select className="form-control form-control-sm" required value={this.state.Type} onChange={this.onChangePropertyType}>
                                            <option value="" disabled selected>Sale or Rent</option>
                                            <option value="For Sale">For Sale</option>
                                            <option value="For Rent">For Rent</option>
                                            <option value="Sold">Sold</option>
                                            <option value="Rented">Rented</option>
                                            
                                        </select>
                                    </div>
                                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                        <p className="formLabels">Enter Address</p>
                                        <input
                                            type="text"
                                            placeholder="Enter Address"
                                            className="form-control form-control-sm"
                                            required
                                            value={this.state.address} onChange={this.onChangePropertyAddress}
                                        />
                                    </div>
                            </div>
                            <br/>
                            <div className="row">
                                    <p className="formLabels">Upload Picture</p>
                                    <input className="form-control form-control-sm" type="file"  name="attachment"/>    
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
                                    required
                                    value={this.state.rooms} onChange={this.onChangePropertyRooms}
                                    />
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                                    <p className="formLabels">Parking Lot</p>
                                    <select className="form-control form-control-sm" required
                                    value={this.state.parking} onChange={this.onChangePropertyParking}>
                                        <option value="" disabled selected>Parking Lot</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                            </div><br/>
                            <div className="row">
                            <button
                                type="submit"
                                className="btn btn-lg btn-info"
                                >
                                    Update Property
                                </button>
                            </div>
                        </div>
                        <br/>
                        
                    </form>
                        
                </div>
            </div>
        )
    }
}
