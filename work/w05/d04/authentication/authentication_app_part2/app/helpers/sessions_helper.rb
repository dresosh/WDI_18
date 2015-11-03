module SessionsHelper

	def current_user
	  @current_user ||= User.find_by(id: session[:user_id])
	end

	# the ||= method is "conditional assignment"
	# e.g. x ||= 3 means assign the variable 'x' to 3 only if 
	# 'x' does not already have a value. If it DOES already have a value, 
	# don't change it.  

end
