class Api::UsersController < ApplicationController
  def index
    @users = User.order(:id)
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
end
