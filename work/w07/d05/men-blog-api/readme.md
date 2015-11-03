###start => mkdir men-blog

1. cd men-blog/
1. git init
1. git add -A
1. git commit -m "first commit"
1. git remote add origin https://github.com/username/men-blog-api.git
1. git push -u origin master
1. npm init
1. git add .
1. git commit -m "packages.json"
1. git push -u origin master
1. touch server.js
1. subl .
1. npm install mongoose --save
1. npm install body-parser --save
1. npm install express --save
1. mkdir app
1. cd app
1. mkdir config
1. cd config/
1. touch routes.js
1. cd ../..
1. touch .gitignore
1. touch Procfile
1. git add .
1. git commit -m "initial setup + server.js"
1. git push origin master
1. git checkout -b routes
1. cd app
1. mkdir models controllers
1. mkdir models controllers
1. cd models/
1. touch article.js
1. cd ..
1. cd controllers/
1. touch articles.js
1. git add .
1. git commit -m "adds models, controllers"
1. cd ../..
1. git add .
1. git commit -m "builds schema for article"
1. git checkout master
1. git merge routes
1. git push origin master
1. nodemon
1. git add -p
1. git commit - m "continue codealong from here"
1. git commit -m "continue codealong from here"


---

Finishing off this morning's setup:

1. finish routes :

	```
	var express = require('express'),
		apiRouter = express.Router(),
		articlesController = require('../controllers/articles'),
		Article = require('../models/article');

	apiRouter.route('/articles')
		.post(function(req, res){
			console.log(req.body);
		})

	module.exports = apiRouter;
	```


2. fire up mongo: `$ mongod`

3. make a new db: `$ mongo` `> use men-blog` // or whatever you named your db

	also if you want to make a change to your package.json you will be able to launch nodemon without sepcifying an entry point.

4. At this point you should be able to fire up your server `$ nodemon` || `$ nodemon server.js` and make a post request to /api/articles and see the req.body be logged out in the server

---


Let's refactor our .post logic so that it is in the controller:

app/config/routes.js:


	```
	var express = require('express'),
		apiRouter = express.Router(),
		articlesController = require('../controllers/articles'),
		Article = require('../models/article');

	apiRouter.route('/articles')
		.post(articlesController.create);

	module.exports = apiRouter;
	```

app/controllers/articles.js:

	```
	//CONTROLLER

	function create(req, res) {
		console.log(req.body);
	}

	module.exports = {
	  create: create
	};

	```

should log you POST

---

Now lets make this controller ACTUALLY use our Article Schema

```
//CONTROLLER
var Article = require('../models/article');

function create(req, res) {
	//Instantiate a new article using our awesome Schema:
	var article = new Article(req.body);
	//log it in the console, as before
	console.log(req.body);
	//save the Article / set up error handling
	article.save(function(err) {
		if (err) console.log('not able to create article b/c ' +err);

		res.json({message: 'Article successfully created'});
	})
}

module.exports = {
  create: create
};
```
