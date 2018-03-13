
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
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res){
    burger.create([
        "name"
    ],[
        req.body.name
    ], function(result){
        res.json({ id: result.insertId});
    });
});
    
router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        name: req.body.name
      }, condition, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });
    


// Export routes for server.js to use.
module.exports = router;