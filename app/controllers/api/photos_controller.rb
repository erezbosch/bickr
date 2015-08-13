class Api::PhotosController < ApplicationController
  def index
    @photos = current_user.followee_photos
                          .order(id: :desc)
                          .includes(:uploader)
                          .concat(Photo.recommendations)
                          .uniq
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def create
    photo = current_user.photos.new(photo_params)
    if photo.save
      render json: photo
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def update
    photo = Photo.find(params[:id])
    if photo.update(photo_params)
      render json: photo
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def destroy
    photo = Photo.find(params[:id])
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
