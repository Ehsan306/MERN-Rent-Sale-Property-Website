import React, { Component } from 'react'
import axios from 'axios';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export default class userTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser() {
        axios.delete('http://localhost:5000/users/deleteUser/' + this.props.obj._id)
            .then((res) => {
                if(res){
                    this.props.history.push(`/adminUser`)
                }
                console.log('User successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            
    }
    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-2">{this.props.obj.first_name} {this.props.obj.last_name}</div>
                        <div className="col-4">{this.props.obj.email}</div>
                        <div className="col-2">{this.props.obj.contact}</div>
                        <div className="col-2"></div>
                        <div className="col-2"><button type="button" class="btn btn-info btn-block" data-toggle="modal" data-target="#myModal">
                            <DeleteOutlineOutlinedIcon fontSize="small"/>
                            </button></div>
                            
                            
                            
                                                
                         
                            
                             
                            
                    
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Delete Confirmation</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this user? You cannot undo this.</p>
                </div>
                <div class="modal-footer">
                <button type="button" onClick={this.deleteUser} class="btn btn-outline-info" data-dismiss="modal">Confirm</button>
                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                </div>
            </div>
            
            </div>
        </div>
        </div>
                </div>
                <br/>
                <div className="line"></div>
                <br/>
            </div>
        )
    }
}
