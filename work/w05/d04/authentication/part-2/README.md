#Authentication with Rails, Pt. II

##SWBAT
- Explain what the 'session' object is, and why we need it
- Build a sessions controller to manage this sessions object.


##Logging In
Now that we're this far, we definitely want to build something out so someone can _log in._

The way a client (your computer) and a server interact is by a simple request/response cycle. When you go to google.com, you make a GET request to google's server. The server then responds with the HTML, CSS, and Javascript that your browser needs to show the page. 

The server doesn't remember who you are between requests. That's not a problem UNTIL the user logs in and our we want our app to remember the user.

Time to learn about **COOKIES!**

<img src="http://czajkowska.com.pl/img/cms/cookies.jpg">

A cookie is a tiny text file stored in our browser that identifies us to the server as a logged in user. 

For as long as our browser is open, it will remember that we are an authenticated user. We'll call that a session.

Every time we make a request, that session cookie will identify us to the server. 

Rails makes all of this extremely easy. We just have to make a controller that can create a new session cookie (to log in), and destroy an existing session cookie (to log out).

This will be a little different than our other controllers, because this one won't be backed by a _model_ – we don't need it. Even though we don't need a model to manage our sessions, we will still need:

- **Routes**
- **Controller**
- **View**

###Routes

In our routes file, we'll add three more routes: 

```ruby
# config/routes.rb
get '/login'     => 'sessions#new'
post '/login'    => 'sessions#create'
delete '/logout' => 'sessions#destroy'
```

###Creating a SessionsController
We're going to need a controller!

```
rails g controller sessions
```

Let's start by adding three actions to our Sessions Controller. We could probably figure out by looking at the routes we just wrote which controller actions we need to define:

```ruby
# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def new
  end

  def create
  end

  def destroy
  end
end
```

Our ``new`` method doesn't need anything inside it. The only thing we are going to use it for is to render a view template that has a login form.

###The New Session (a.k.a Login) Form

In our view, we're going to make a form that's not backed by a _model_:

```html
<!-- app/views/sessions/new.html.erb -->
<h1>Log In</h1>
<%= form_for :login do |f| %>
  <div>
    <%= f.label :email %>
    <%= f.text_field :email %>
  </div>
  <div>
    <%= f.label :password %>
    <%= f.password_field :password %>
  </div>
  <div>
    <%= f.submit 'Log In' %>
  </div>
<% end %>
```

If you look at the rendered HTML when you view source on the browser page, you'll see something like this:

```html
<form accept-charset="UTF-8" action="/login" method="post">
  <div>
    <label for="login_email">Email</label>
    <input id="login_email" name="login[email]" type="text">
  </div>
  <div>
    <label for="login_password">Password</label>
    <input id="login_password" name="login[password]" type="password">
  </div>
  <div>
    <input name="commit" type="submit" value="Log In">
  </div>
</form>
```

Rails infers that based on the routes we've set up that we want to POST information to `/login`.

Our params will come through like this, because of how we made that form:

```ruby
{
  "login" => {
    "email" => 'something@whatever.com',
    "password" => 'someplaintext'
  }
}
```

###Creating a 'Session'
Now that we have our form with a user's email address being sent to us in the params, we can query our database to find the user record that has that email:

```ruby
# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:login][:email])
  end

  def destroy
  end
end
```

And if that works, and if we find a user, we can check whether their encyrpted password is the same as the one they just gave us.

```ruby
# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:login][:email])
    if user && user.authenticate(params[:login][:password])
      # set a cookie, so our browser knows 
      # we are who we say we are
    else
      # give them another shot at logging
      # perhaps by redirecting back to the login form
      # maybe tell them they got it wrong?
    end
  end

  def destroy
  end
end
```

Now we just need to store the **session**, which behind the scenes Rails will put in a **cookie** – a tiny text file that will stick around on the user's hard drive and say, "Hey, this is the current user!"

Luckily, Rails gives us a session object to manage this process. The session object acts just like a _hash_.

```ruby
# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:login][:email])
    if user && user.authenticate(params[:login][:password])
      # make a new key in our session object called :user_id
      # which gets stored in a cookie in our browser
      session[:user_id] = user.id.to_s
      redirect_to users_path
    else
      render :new
    end
  end

  def destroy
  end
end
```

I bet you're asking why the heck we are turning `user.id` into a string.  Well, here's the deal: a cookie can really only store strings, and our ID is a whole object so we need to convert it to a string.

If we try to log in with a user we created, we'll see that it worked because we are redirected to the user index path. 

Let's make a helper method so that we know _who_ the current user is that's stored in that cookie.

###Creating a Current User Helper
Inside our sessions_helper.rb file, we'll write a method called `current_user`. We will be able to access this method from any of our views, but we're sticking it in the sessions helper file because it helps us divide up our code.


```ruby
# app/helpers/sessions_helper.rb

def current_user
  @current_user ||= User.find_by(id: session[:user_id])
end
```
WAIT! What is ||=?

- - -

Now, check this out. Anywhere in any of our views, we can write something like:

```html
<%= current_user.name %>
```

That gives us an error when there is no current_user! So we'll only run this code IF there is indeed a current_user

```html
<%= current_user.name if current_user%>
```

Now, we can use current_user in any of our views and know who's logged in.

###Logging Out
Now we're in the home stretch. What about logging out?

If 'logging in' is just storing some information in our session hash, to "log out" all we have to do is delete that information from our hash.

```ruby
# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:login][:email])

    if user && user.authenticate(params[:login][:password]) 
      session[:user_id] = user.id.to_s
      redirect_to users_path
    else
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to login_path
  end
end
```

How would we delete a key/value pair from a normal hash?

Here is an alternative way of writing the create method with .where instead of .find_by.

```ruby
# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def new
  end
  def create
    user = User.where(email: params[:login][:email]).first
    if user && user.authenticate(params[:login][:password])
      # make a new key in our session object
      # which gets stored in a cookie on our hard drive
      # we'll store the user's ID to make for a fast
      # User.find later on
      session[:user_id] = user.id.to_s
      redirect_to users_path
    else
      render :new
    end
  end

  def destroy
    # delete that key/value pair in our sessions hash
    session.delete(:user_id)
    redirect_to login_path
  end
end
```

Of course, our view needs a link to that delete method, but we've seen that before in other CRUD views.

```html
<%= link_to 'Log Out', logout_path, method: :delete %>
```

If you're redirected to the login page, it worked! 

That's basically it. There are, of course, a few gotchas.


## Important Gotchas

###Only Display Certain Stuff If Logged In

Currently, in our views, we're trying to display:

```html
<%= current_user.name %>
```

```html
<% if current_user %>
  Logged in as: <%= current_user.name %> <%= link_to 'Log Out', logout_path, method: :delete %>
<% else %>
  <%= link_to 'Log In', login_path %>
  <%= link_to 'Sign Up', users_new_path %>
<% end %>
```

### When You Sign Up, It Should Log You In Automatically.
Currently, when someone signs up for the first time, it just creates a new user. The new user isn't automatically logged in. We should add their user id to the session hash when we create them.

Back in the create action of our users_controller.rb, we will add the user id as soon as the user is saved!

```ruby
# app/controllers/users_controller.rb
class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
  	
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id.to_s
      redirect_to users_path
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
```

##Oh... and... one more thing...

##Conclusion
This has all been lot – I know.

Individually, each piece of the puzzle builds on basic Ruby and Rails building blocks you've mostly already learned.

You should definitely revisit each of the pieces we've talked about today, and make sure you understand them individually. Start up a new application, write it from scratch. Then scrap it and do it again. The more you write it, the better you'll get it.