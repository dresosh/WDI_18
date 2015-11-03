class UsersController < ApplicationController
	include SessionsHelper
	# this "include SessionsHelper" line gives this controller
	# access to any of the methods that we defined in our
	# helper/sessions_helper.rb file. It basically means we can
	# use the 'current_user' method to get the current user.

	# An alternative approach (that some people prefer), is to actually 
	# define the 'current_user' method in the UsersController. We can then 
	# make it available in the views by simply writing the following after 
	# we've defined the method:
	
	# helper_method :current_user


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
			# ^^This line automatically logs the user in the first time they sign up for our app
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
