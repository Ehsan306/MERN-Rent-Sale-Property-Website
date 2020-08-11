import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export default class PropertyTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    deleteProperty() {
        axios.delete('http://localhost:5000/properties/deleteProperty/' + this.props.obj._id)
            .then((res) => {
                if(res){
                    this.props.history.push(`/propertyList`)
                }
                console.log('Property successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                
                <div>
                    <div className="row">
                        <div className="col-2">{this.props.obj.Type}</div>
                        <div className="col-4">{this.props.obj.title}</div>
                        <div className="col-2"><Link to= {{
                                      pathname: "/propertyDetailPage",
                                      state:{
                                         property: this.props.obj
                                        }
                                    }}>
                                <button class="btn btn-info btn-block"> <VisibilityOutlinedIcon fontSize="small" /> </button>
                                </Link></div>
                        <div className="col-2"><Link className="edit-link" to={"/editProperty/" + this.props.obj._id}>
                                <button class="btn btn-info btn-block"> <EditOutlinedIcon fontSize="small"/> </button>
                            </Link></div>
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
                    <p>Are you sure you want to delete this property? You cannot undo this.</p>
                </div>
                <div class="modal-footer">
                <button type="button" onClick={this.deleteProperty} class="btn btn-outline-info" data-dismiss="modal">Confirm</button>
                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
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
