module API
  class BowtiesController < ApplicationController

  	def index
  		render json: Bowtie.all
  	end

  	def show
  		render json: Bowtie.find(params[:id])
  	end

    def create
      bowtie = Bowtie.new(bowtie_params)

      if bowtie.save
        render json: bowtie, status: 201
      else
        render json: bowtie.errors, status: 422
      end
    end

    def update
	    bowtie = Bowtie.find(params[:id])
	    if bowtie.update_attributes(bowtie_params)
	      head 204
	    else
	      render json: bowtie.errors, status: 422
	    end
  	end

  	private
	def bowtie_params
	  params.require(:bowtie).permit(:material, :pattern, :style, :image_url, :wholesale_price, :retail_price)
	end
  end
end