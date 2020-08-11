import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './admin.css'
export default class adminSidebar extends Component {
    render() {
        return (
            <div>
                <div class="sidebar">
                    <Link to="/adminProfile"><a class="active" href="#home">Dashboard</a></Link>
                    <Link to="/adminUser"><a href="#news">Users</a></Link>
                    <Link to="/propertyList"><a href="#contact">Properties</a></Link>
                </div>
            </div>
        )
    }
}
