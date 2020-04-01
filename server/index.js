const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');
const User = require('./models/user')
const Plant = require('./models/plant')
const Space = require('./models/space')
const cookieSession = require('cookie-session')

// DB Setup
mongoose.connect(keys.MONGODB_URI);

app.use(
    cors({
      origin: 'http://localhost:3000', // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['benny']
  })
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('http://localhost:3000');
  res.end()
});

app.get('/current_user', (req, res) => {
  const id = req.user
  User
  .findById(id).exec((error, user) => {
    if (error){
      res.writeHead(404);	
      return res.end("No user is signed in.");
    } else{
      return res.send(user)
    }
  })
});

app.post('/addspace',  (req, res) => {

  let newSpace = new Space()

    newSpace.name = req.body.name
    newSpace.room_size = req.body.room_size
    newSpace.room_height = req.body.room_height
    newSpace.water = req.body.water
    newSpace.light = req.body.light
    newSpace.kid_friendly = req.body.kid_friendly
    newSpace.pet_friendly = req.body.pet_friendly
    newSpace.plant_collection = []
  

  newSpace.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        if (req.body.room_size === "Small"){
          req.body.room_size = 2 
        } else if (req.body.room_size === "Medium") {
          req.body.room_size = 4
        } else if (req.body.room_size === "Large") {
          req.body.room_size = 12
        }
          Plant.find({ 
                max_height: {$lt : req.body.room_height},
                max_width: { $lte: req.body.room_size },
                water: req.body.water,
                light: req.body.light, 
                $or:[ {kid_friendly: req.body.kid_friendly}, {pet_friendly: req.body.pet_friendly} ],
                difficulty: req.body.difficulty
                }).exec((error, plant) => {
                    if (error){
                      res.writeHead(404);	
                      res.end("error");
                    } else {
                      return res.send(plant)
                  }
                })
              }
           })
        })

app.get('/plantlibrary', (req, res) => {
    Plant.find({}).exec((err, plants) => {
      if (err) {
        res.send(err)
      } else {
        res.send({plants})
      }
   })
})


app.post('/collection', (req, res) => {
  const id = req.user
  const plantId = req.body.plant._id

  User.findById(id).exec((err, user) => {
      if (err) {
        res.send(err)
      } else {
        Plant.findById(plantId).exec((err, plant) => {
          if (err) {
            res.send(err)
          } else {
            user.plant_collection.push(plant)
            user.save()
            res.send({user})
          }
      })
    }
  })
})

app.post('/:userId/:plantId/addtocollection', (req, res) => {
  let plantId = req.params.plantId
  let userId = req.params.userId
  
  Plant.findById(plantId).exec((err, plant) => {
    if (err) {
      res.send(err)
    } else {
      User.findById(userId).exec((err, user) => {
        if (err) {
        res.send(err)
        } else {
         user.plant_collection.push(plant)
         user.save()
         res.send('Plant has been saved to collection!')
        }
      })
    }
  })
})

app.get('/:plantId/plantdetail', (req, res) => {
  const plantId = req.params.plantId

  Plant.findById(plantId).exec((err, plant) => {
    if (err) {
      res.send(err)
    } else {
      res.send(plant)
    }
 })
})

app.post('/adduser', (req, res) => {
  
  let newUser = new User()

    newUser.name = req.body.name
    newUser.plant_collection = []
    newUser.wish_list = []
    newUser.spaces =[]

    newUser.save(function (err, user) {
      if (err) {
        res.send(err);
      } else {
        res.send({user})
    }
  })
})


// Server Setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);