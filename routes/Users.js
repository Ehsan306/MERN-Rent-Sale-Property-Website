const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const multer=require('multer')
const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

let fileName;
  users.post('/register', (req, res) => {

  const storageTarget = multer.diskStorage({
        destination : "uploads",
            filename: (req,file,cb)=>{
                fileName = "a" + Date.now() + file.originalname
                cb(null, fileName)
                
            }
    })
const upload = multer({storage:storageTarget}).single(`file`)

users.use(cors())
process.env.SECRET_KEY = 'secret'

upload(req,res,async ()=>{
  const {first_name, last_name, email, password, contact}  = req.body
  const userData ={
    first_name,
    last_name,
    email,
    password,
    contact,
    created: new Date(),
    dp:fileName
  }
  console.log("body in uploads that came from react", userData)
   User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })

})
  
})  

users.route('/editUser/:id').get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

users.route('/countUsers').get(function(req,res){

  User.count( {}, function(err, result){

      if(err){
          res.send(err)
      }
      else{
          res.json(result)
      }

 })


})

users.route('/updateUser/:id').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Property updated successfully !')
    }
  })
})

users.route('/deleteUser/:id').delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

users.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            contact: user.contact,
            dp: user.dp
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})



module.exports = users
