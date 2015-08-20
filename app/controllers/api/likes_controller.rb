class Api::LikesController < ApplicationController
  before_action only: :destroy do |c|
    c.prevent_illegal_changes params[:id]
  end
  before_action :redirect_unless_logged_in

  def create
    @like = current_user.likes.new(like_params)
    if @like.save
      @like.likable.num_likes += 1
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.likable.num_likes -= 1
    @like.destroy
    render json: @like
  end

  private

  def like_params
    params.require(:like).permit(:likable_id, :likable_type)
  end
end
