class Api::UsersController < ApplicationController
  def index
    @users = User.order(:id)
    @follows_hash = current_user.out_follows_hash
    render :index
  end

  def show
    @user = User.find(params[:id])
    @follows_hash = current_user.out_follows_hash
    render :show
  end
end
