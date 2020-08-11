import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import createProperty from './components/CRUD/createProperty'
import listProperty from './components/CRUD/allPropertyList'
import editProperty from './components/CRUD/editProperty'
import specificUserPost from './components/CRUD/myProperties'
import propertyDetailPage from './components/CRUD/propertyDetailPage'
import adminProfile from './components/adminProfile'
import adminUser from './components/allUsersList'
import editUser from './components/EditProfile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/adminProfile" component={adminProfile} />
            <Route exact path="/createProperty" component={createProperty} />
            <Route exact path="/propertyList" component={listProperty} />
            <Route exact path="/editProperty/:id" component={editProperty} />
            <Route exact path="/editUser/:id" component={editUser} />
            <Route exact path="/specificUserPost/:id" component={specificUserPost} />
            <Route exact path="/propertyDetailPage" component={propertyDetailPage} />
            <Route exact path="/adminUser" component={adminUser} />
          </div>
      </Router>
    )
  }
}

export default App
