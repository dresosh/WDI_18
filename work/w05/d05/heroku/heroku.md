#HEROKU DEPLOYMENT

##"Deploy early, deploy often"


###OBJECTIVES
```
* Setup a Heroku account
* Heroku Toobelt (Download and install)
* Heroku Create
* 12_factor
* Heroku Run
* Heroku logs
* Rake assets:precompile
```
--
***What is Heroku?***

- A cloud-based service that allows you to deploy your Rails app using Git


***What is rails_12_factor ?***

- A gem that makes running your Rails app on Heroku easier. 
    - Adds logging to std_out instead of a log file
    - Enables serving static assets

--


1. Go to [signup.heroku.com](signup.heroku.com) and sign up for a free Heroku account. Make a note of your email and password combo for heroku - you will need these!

2. Download and install [toolbelt.heroku.com](toolbelt.heroku.com). This is the toolbelt for heroku and allows you to interact with heroku from your command line.

3. `$ heroku login` (prompts for email and password

4. In terminal, navigate to the project you would like to deploy. Open it in your text editor of choice. 

5. Rails 12 factor: Add the following lines to your Gemfile and then run `$ bundle install`.

	`Gemfile`


	```ruby
	ruby '2.2.1'

	group :production do
	  gem 'rails_12factor'
	end

	```

5. Set a root route in routes.rb 

6. `$ heroku create ` (you can pass an app name as an argument, else heroku will give you one like "calm-waters55600)


7. `$ heroku git:remote -a YOURHEROKUAPPNAME` this adds your new heorku app as a remote repository for this rails project

8. Make sure everything is up to date on origin/master by commiting/pushing 

7. `$ git push heroku master`

8. Last thing: There are a couple tools we have been using : 
	* Rails console
	* Rake db:

	To access these tools in heroku (remotely) we can use them in EXACLTY the same way, except we need to prepend 
	
	* `heroku run`
	* `heroku run rake db:migrate`
	* `heroku run rake db:seed`
	* `heroku run rails c`

	
9. `$ heroku open` 

Done! 

##2 more things to know about: 

1. rake assets:precompile 
2. heroku logs
	
