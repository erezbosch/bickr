class Api::AlbumsController < ApplicationController
  include Searchable

  def index
    if params[:query]
      @likes_hash = current_user.likes_hash
      search(params[:query])
    else
      @albums = current_user.albums.order(id: :desc)
      render :index
    end
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def create
    album = current_user.albums.new(album_params)
    if album.save
      handle_tags_data(album)
      render json: album
    else
      render json: album.errors.full_messages, status: 422
    end
  end

  def update
    album = Album.find(params[:id])
    if album.update(album_params)
      handle_tags_data(album)
      render json: album
    else
      render json: album.errors.full_messages, status: 422
    end
  end

  def destroy
    album = Album.find(params[:id])
    album.photos.each { |photo| photo.update(album_id: nil) }
    album.destroy
    render json: album
  end

  private
  def album_params
    params.require(:album).permit(:title, :description, :cover_photo_id)
  end
end
