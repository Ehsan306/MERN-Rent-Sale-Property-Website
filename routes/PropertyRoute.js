let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();
const cors = require('cors')
router.use(cors());
let fileName;
let fileNames = [];
process.env.SECRET_KEY = 'secret'
const multer=require('multer')
// Student Model
let propertySchema = require('../models/PropertyModel');

router.post('/createProperty', (req, res) => {

  const storageTarget = multer.diskStorage({
        destination : "uploads",
            filename: (req,file,cb)=>{
                fileName = "a" + Date.now() + file.originalname
                cb(null, fileName)
               fileNames.push(fileName) 
            }
    })
const upload = multer({storage:storageTarget}).array(`file`)
router.use(cors())
process.env.SECRET_KEY = 'secret'
upload(req,res,async ()=>{
  const {title,details,location,price,Type,address,rooms,parking,posterId,posterName}  = req.body
  const propertyData ={
    title,
    details,
    location,
    price,
    Type,
    address,
    rooms,
    posterId,
    posterName,
    parking,
    upload: fileNames[0],
    upload1: fileNames[1],
    upload2: fileNames[2]
  }
  console.log("body in uploads that came from react", propertyData)
    
   
          propertySchema.create(propertyData)
            .then(propertySchema => {
              res.json('Property Registered!' )
            })
            .catch(err => {
              res.send('error: ' + err)
            })
          })
        })

/*// CREATE Student
  router.route('/createProperty').post((req, res, next) => {
  propertySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
*/

router.get('/specificUserPost/:id', (req, res) => {

  propertySchema.find({
    posterId: req.params.id
  })
    .then(userPost => {
      if (userPost) {
        res.json(userPost)
        console.log(res)
      } else {
        res.send('No Posts to Show')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//SearchByLocation
router.get('/searchLocation/:location', (req, res) => {

  propertySchema.find({
    location: req.params.location
  })
    .then(userPost => {
      if (userPost) {
        res.json(userPost)
        console.log(res)
      } else {
        res.send('No Posts to Show')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


router.route('/').get((req, res) => {
  propertySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/editProperty/:id').get((req, res) => {
  propertySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
router.route('/updateProperty/:id').put((req, res, next) => {
  propertySchema.findByIdAndUpdate(req.params.id, {
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

router.route('/countProperty').get(function(req,res){

  propertySchema.count( {}, function(err, result){

      if(err){
          res.send(err)
      }
      else{
          res.json(result)
      }

 })


})

router.route('/deleteProperty/:id').delete((req, res, next) => {
  propertySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;