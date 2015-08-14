class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    # We should get some weird params here, id and type. Use them to build the
    # new Tag on the association. constantize is a good method.
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
