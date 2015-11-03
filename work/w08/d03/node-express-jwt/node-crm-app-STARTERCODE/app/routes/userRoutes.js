var express = require('express')
var apiRouter = express.Router() //get an instance of express router
var usersController = require('../controllers/usersController')


apiRouter.use(function(req, res, next){
	// this is going to run EVERY time our API is hit
	// we want to check if the user is logged in here
	console.log("checking is user is logged in")
	next()
})

apiRouter.route('/users')
	.get(usersController.index)

	.post(usersController.create)

apiRouter.route('/users/:user_id')
	.get(usersController.show)

	.put(usersController.update)

	.delete(usersController.destroy)


module.exports = apiRouter