class Api::UsersController < ApplicationController
  def index
    @users = User.order(:id)
    @follows_hash = current_user.out_follows_hash
    render :index
  end

  def show
    @user = User.find(params[:id])
    @follows_hash = {
      @user.id => current_user.out_follows.find_by(followee_id: @user.id)
    }
    @show_photos, @show_albums = params[:show_photos], params[:show_albums]
    render :show
  end
end
