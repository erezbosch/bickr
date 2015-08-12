class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])
    render json: @album, include: :photos
  end

  def create
    album = current_user.photos.new(album_params)
    if album.save
      render json: album
    else
      render json: album.errors.full_messages, status: 422
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :description)
  end
end
