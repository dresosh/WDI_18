class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end
  def show
    @album = Album.find( params[ :id ] )
    @artist = Artist.find( @album.artist_id )
  end
  def new
    @album = Album.new
    @artists = Artist.all
  end
  def create
    @album = Album.create!( album_params )
    redirect_to album_path( @album )
  end
  def edit
    @album = Album.find( params[ :id ] )
    @artists = Artist.all
  end
  def update
    album = Album.find( params[ :id ] )
    album.update( album_params )
    redirect_to album_path( album )
  end
  def destroy
    @album = Album.find( params[ :id ] )
    @album.destroy
    redirect_to albums_path
  end

  private

  def album_params
    hash = params.require( :album ).permit( :title, :poster, :price, :artist_id, genre_ids: []  )
    hash[:genre_ids] = hash[:genre_ids] - ["0"] - ["true"]
    hash
  end
end
