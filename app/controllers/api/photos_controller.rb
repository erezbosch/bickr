class Api::PhotosController < ApplicationController
  include Searchable

  def index
    if params[:query]
      search(params[:query])
    else
      @photos = current_user.followee_photos
                            .order(id: :desc)
                            .includes(:uploader)
                            .concat(Photo.recommendations)
                            .uniq
      render :index
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def create
    photo = current_user.photos.new(photo_params)
    if photo.save
      handle_tags_data(photo)
      render json: photo
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def update
    photo = Photo.find(params[:id])
    photo_data = photo_params
    photo_data[:album_id] = nil if photo_data[:album_id].blank?
    if photo.update(photo_data)
      handle_tags_data(photo)
      render json: photo
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.covering_album.update(cover_photo: nil) if photo.covering_album
    photo.destroy
    render json: photo
  end

  private
  def photo_params
    params.require(:photo).permit(
      :album_id,
      :title,
      :caption,
      :image_url,
      :public_id
    )
  end
end
