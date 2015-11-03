class CommentsController < ApplicationController
	def create 
		@bean = Bean.find(params[:bean_id])
		@comment = @bean.comments.create(comment_params)
		redirect_to bean_path(@bean)
	end


	private

	def comment_params
		params.require(:comment).permit(:commenter, :body)
	end

end
