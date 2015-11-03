#Heroku using Unicorn via Procfile

1. Go to [Heroku](https://signup.heroku.com/www-header) and create an account
2. Download and install [heroku toolbelt](https://toolbelt.heroku.com/) Once installed, you'll have access to the heroku command from your command shell. Log in using the email address and password you used when creating your Heroku account:
	
	``` 
	$ heroku login
	Enter your Heroku credentials.
	Email: adam@example.com
	Password (typing will be hidden):
	Authentication successful.

	```
3. You're now ready to create your first Heroku app:

	```
	$ cd ~/myapp
	$ heroku create
	Creating stark-fog-398... done, stack is cedar-14
	http://stark-fog-398.herokuapp.com/ | https://git.heroku.com/stark-fog-398.git
	Git remote heroku added
	```
	

4. To enable features such as static asset serving and logging on Heroku add **rails_12factor** gem to the end of your Gemfile.

	`gem 'rails_12factor', group: :production`


5. Specify specific Ruby. At the end of your gemfile
	`ruby "2.1.2"`


6. Add Unicorn Webserver to your gemfile
	`gem 'unicorn'`

7. Then run
	`$ bundle install`
	Now you are ready to configure your app to use Unicorn.

8. Create a configuration file for Unicorn at config/unicorn.rb:

	`$ touch config/unicorn.rb`


9. Add Unicorn specific configuration options In file config/unicorn.rb:

	``` 
	worker_processes Integer(ENV["WEB_CONCURRENCY"] || 3)
	timeout 15
	preload_app true

	before_fork do |server, worker|
	  Signal.trap 'TERM' do
	    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
	    Process.kill 'QUIT', Process.pid
	  end

	  defined?(ActiveRecord::Base) and
	    ActiveRecord::Base.connection.disconnect!
	end

	after_fork do |server, worker|
	  Signal.trap 'TERM' do
	    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
	  end

	  defined?(ActiveRecord::Base) and
	    ActiveRecord::Base.establish_connection
	end
	```

	This default configuration assumes a standard Rails app with Active Record. You should get acquainted with the different options in the official Unicorn documentation.


10. Finally you will need to tell Heroku how to run your Rails app by creating a Procfile in the root of your application directory. Add a Procfile: `$ touch Procfile` (note: the case is important!)

11. in the Procfile write:

	`web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb`


12. Set the RACK_ENV to development in your environment and a PORT to connect to. Before pushing to Heroku you’ll want to test with the RACK_ENV set to production since this is the enviroment your Heroku app will run in.
	
	```
	$ echo "RACK_ENV=development" >> .env
	$ echo "PORT=3000" >> .env
	```

12. You’ll also want to add .env to your .gitignore since this is for local enviroment setup.
	```
	$ echo ".env" >> .gitignore
	$ git add .gitignore
	$ git commit -m "add .env to .gitignore"
	```

14. (optional) Test your Procfile locally using Foreman:
	`$ gem install foreman`


	You can now start your web server by running 
	!! Ctrl C your rails server first or it will fail!

	`$ foreman start`
	
	```
	18:24:56 web.1  | I, [2013-03-13T18:24:56.885046 #18793]  INFO -- : listening on addr=0.0.0.0:5000 fd=7
	18:24:56 web.1  | I, [2013-03-13T18:24:56.885140 #18793]  INFO -- : worker=0 spawning...
	18:24:56 web.1  | I, [2013-03-13T18:24:56.885680 #18793]  INFO -- : master process ready
	18:24:56 web.1  | I, [2013-03-13T18:24:56.886145 #18795]  INFO -- : worker=0 spawned pid=18795
	18:24:56 web.1  | I, [2013-03-13T18:24:56.886272 #18795]  INFO -- : Refreshing Gem list
	18:24:57 web.1  | I, [2013-03-13T18:24:57.647574 #18795]  INFO -- : worker=0 ready
	```

15. precompile your assets
	`$ rake assets:precompile`

15. Press Ctrl-C to exit and you can deploy your changes to Heroku + github:

	```
	$ git add -A
	$ git commit -m "use unicorn via procfile"
	$ git push origin master
	$ git push heroku master
	```

16. Migrate the database on Heroku

	`heroku run rake db:migrate`


17. make sure the app is set to run
	`heroku ps:scale web=1`


18. open the app `heroku open`

