// #### Controller setup

// 1. Inside your `burger` directory, create a folder named `controllers`.

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.


//Working off of cats activity

var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

//create our routes
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (data) {
        res.redirect("/")
            
        
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.update({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
  });
});



// Export routes for server.js to use.
module.exports = router;