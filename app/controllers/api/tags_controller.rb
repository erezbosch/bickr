class Api::TagsController < ApplicationController
  before_action only: :destroy do |c|
    c.prevent_illegal_changes params[:id]
  end
  before_action :redirect_unless_logged_in

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render json: @tag
  end

  private
  def tag_params
    params.require(:tag).permit(:label)
  end
end
