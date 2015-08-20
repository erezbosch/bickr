class Api::UsersController < ApplicationController
  before_action only: :update do |c|
    c.prevent_illegal_changes params[:id]
  end
  before_action :redirect_unless_logged_in

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
    @likes_hash = current_user.likes_hash
    render :show
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:avatar_url)
  end
end
