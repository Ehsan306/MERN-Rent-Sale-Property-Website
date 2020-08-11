import React, { Component } from 'react'
import axios from 'axios';

export default class EditProfile extends Component {
    constructor(props) {
        super(props)
    
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          contact: '',
          password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/editUser/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              contact: res.data.contact,
              email: res.data.email,
              password: res.data.password
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

            onChangeFirstName(e) {
                this.setState({first_name: e.target.value})
            }
            onChangeLastName(e) {
                this.setState({last_name: e.target.value})
            }
            onChangeEmail(e) {
                this.setState({email: e.target.value})
            }
            onChangeContact(e) {
                this.setState({contact: e.target.value})
            }
            onChangePassword(e) {
                this.setState({password: e.target.value})
            }
            
      onSubmit(e) {
        e.preventDefault()
    
        const propertyObject = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              contact: this.state.contact,
              email: this.state.email,
              password: this.state.password
          };

          axios.put('http://localhost:5000/users/updateUser/' + this.props.match.params.id, propertyObject)
          .then((res) => {
            console.log(res.data)
            console.log('User successfully updated')
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
                    <h5>Update User Information</h5>
                    <div className="line"></div>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        
                        <div className="container">
                            <div className="row">
                                <p className="formLabels">First Name</p>
                                <input
                                type="text"
                                placeholder="First Name"
                                className="form-control form-control-sm"
                                required
                                value={this.state.first_name} onChange={this.onChangeFirstName}
                                />
                            </div>
                            <br/>
                            <div className="row">
                                <p className="formLabels">Last Name</p>
                                <input
                                type="text"
                                placeholder="Last Name"
                                className="form-control form-control-sm"
                                required
                                value={this.state.last_name} onChange={this.onChangeLastName}
                                />
                            </div>
                            <br/>
                            <div className="row">
                                <p className="formLabels">Contact</p>
                                <input
                                type="text"
                                placeholder="First Name"
                                className="form-control form-control-sm"
                                required
                                value={this.state.contact} onChange={this.onChangeContact}
                                />
                            </div>
                            <br/>
                            <div className="row">
                                <p className="formLabels">Password</p>
                                <input
                                type="password"
                                className="form-control form-control-sm"
                                value={this.state.password} onChange={this.onChangePassword}
                                />
                            </div>
                            <br/>
                            
                            <br/>
                            
                            <div className="row">
                            <button
                                type="submit"
                                className="btn btn-lg btn-info"
                                >
                                    Update Info
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
