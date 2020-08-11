
          import React, { Component } from 'react';
          import axios from 'axios';
          import FormData from "form-data";
          import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
          import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
          import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
          import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
          
          
          const validEmailRegex = RegExp(
            /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
          
          const validfirstNameRegex =RegExp(
            /^[a-zA-Z ]*$/
          );  
          const validPasswordRegex = RegExp(
            /^(?=.).{6,}$/
          )
          
          const validContactRegex = RegExp(
            /03[0-9]{2}(?!1234567)(?!1111111)(?!7654321)[0-9]{7}$/ 
          )
          
          const validCnicRegex = RegExp(
            /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/
          )
          const validateForm = errors => {
              let valid = true;
              Object.values(errors).forEach(val => val.length > 0 && (valid = false));
              return valid;
          };
          class  Register extends Component {
              constructor(props) {
                  super(props);
                  this.state = {
                    first_name: null,
                    last_name: null,
                    email: null,
                    password: null,
                    contact:null,
                    cnic: null,
                    errors: {
                      first_name: "",
                      last_name: "",
                      email: "",
                      cnic: "",
                      contact: "",
                      password: ""
                    }
                  };
                }
          
                
              handleChange = event => {
                  event.preventDefault();
                  const { name, value } = event.target;
                  let errors = this.state.errors;
              
                  switch (name) {
                    case "first_name":
                      errors.first_name =
                        validfirstNameRegex.test(value) ? "" : "First Name should be only alphabets*";
                      break;
                    case "last_name":
                      errors.last_name =
                        validfirstNameRegex.test(value) ? "" : "Last Name should be only alphabets*";
                      break;
                    case "email":
                      errors.email = 
                        validEmailRegex.test(value) ? "" : "Email is not valid*";
                      break;
                    case "password":
                      errors.password =
                        validPasswordRegex.test(value) ? "" : "Password should be of minimum 6 characters*";
                      break;
                  case "contact":
                      errors.contact = 
                        validContactRegex.test(value) ? "" : "Enter Valid Phone Number(03012345678)*";
                  break;
                  case "cnic":
                      errors.cnic =
                        validCnicRegex.test(value) ? "" : "Enter Valid Cnic No (99999-9999999-9)*";
                      break;
                    default:
                      break;
                  }
              
                  this.setState({ errors, [name]: value });
                };
          
          
              submitHandler = e =>{
              e.preventDefault()
              if (validateForm(this.state.errors)) {
                    if( e.target.first_name.value !== "" && 
                    e.target.email.value !== "" && 
                    e.target.contact.value !== "" && 
                    
                    e.target.password.value !== ""
                   )
                    {
                      const formData = new FormData();
                      formData.append("file",  e.target.attachment.files[0])
                      formData.append("first_name", e.target.first_name.value)
                      formData.append("last_name", e.target.last_name.value)
                      formData.append("email", e.target.email.value)
                      formData.append("contact", e.target.contact.value)
                      formData.append("password", e.target.password.value)
                    
                      axios.post('/users/register',formData,
                      {
                          headers: {
                            'content-type':"'multipart/form-data';"
                          }
                      })
                          .then(res => {
                              this.props.history.push(`/login`)
                              if(res.data.status==="success"){
                                  this.props.toggle();
                          }
                      
                      })
                      .catch(function (error) {
                          console.log(error);
                      });
                      console.info("Valid Form");
                    }
                   
                } else {
                  console.error("Invalid Form");
                }
              }
              render() { 
                  const { errors } = this.state;
                  return (
                    <div className="container">
                    <div class="col-md-6 mt-2 mx-auto">
                      <div className="formBanner"><h3 className="text-center font-weight-bold">Sign Up</h3></div>
                      <br/>
                      <div className="innerContainer">
                      <form onSubmit={this.submitHandler}>
                      
                          <div className="row">
                               <div className="col-6"> 
                                  <div className="error">{errors.first_name}</div>
                                  <div class="input-group"><PersonOutlineOutlinedIcon fontSize="large" className="iconBackground"/><input type="text" onChange={this.handleChange} class="form-control form-control-sm" name="first_name" placeholder="First Name" /></div>
                                </div>
                               <div className="col-6">
                               <div className="error">{errors.last_name}</div>  
                               <div class="input-group"><PersonOutlineOutlinedIcon fontSize="large" className="iconBackground"/><input type="text" onChange={this.handleChange} class="form-control form-control-sm" name="last_name" placeholder="Last Name" /></div>
                               </div>
                          </div>
                          <br />
                          <div className="row">
                              <div className="col-12">
                              <div className="error">{errors.email}</div>
                              <div class="input-group"><MailOutlineOutlinedIcon fontSize="large"  className="iconBackground"/><input type="email" onChange={this.handleChange} class="form-control form-control-sm" name="email" placeholder="Enter Email" /></div>
                              </div>
                           </div>
                           <br />
                          <div className="row">
                                  <div className="col-6">
                                    <div className="error">{errors.password}</div>
                                    <div class="input-group"><LockOutlinedIcon fontSize="large"  className="iconBackground"/><input type="password" onChange={this.handleChange} class="form-control form-control-sm" name="password" placeholder="Enter Password" /></div>
                                  </div>
                                  <div className="col-6">
                                    <div className="error">{errors.contact}</div>
                                    <div class="input-group"><PhoneAndroidOutlinedIcon fontSize="large"  className="iconBackground" /><input type="text" onChange={this.handleChange} class="form-control form-control-sm" name="contact" maxlength="11" placeholder="Contact" /></div>
                                  </div>
                          </div>
                          <br/>
                          <div className="row">
                            
                              <div class="input-group"><span className="registerLabel">Upload Picture</span>
                              <input type="file"  name="attachment"/></div>
                              
                          </div>
                          <br />
                          
                          <div className="row">
                             <button type="submit" class="btn btn-lg btn-info btn-block">Register</button>
                          </div>
                                  
                      </form>
                      </div>
                  </div>
                </div>
                  )  
              }
          }
           
          export default Register;