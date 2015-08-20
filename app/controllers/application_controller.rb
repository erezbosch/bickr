class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def log_out!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def redirect_unless_logged_in
    redirect_to new_session_url unless current_user
  end

  def redirect_if_logged_in
    redirect_to root_url if current_user
  end

  def prevent_illegal_changes id
    case controller_name
    when 'photos'
      id_method = :uploader_id
    when 'albums'
      id_method = :creator_id
    when 'follows'
      id_method = :followee_id
    else
      id_method = "#{controller_name}_id"
    end
    model = controller_name.classify.constantize.find(id)
    unless current_user && current_user.id == model.send(id_method)
      render text: '403 FORBIDDEN'
    end
  end

  helper_method :current_user

  private
  def handle_tags_data(tagged_item)
    tag_ids = []
    if params[:tags]
      params[:tags].each do |tag|
        next if tagged_item.tags.find_by(label: tag['label'])
        maybe_tag = Tag.find_by(label: tag['label'])
        if maybe_tag
          tagged_item.taggings.create!(tag: maybe_tag)
          tag_ids << maybe_tag.id
        else
          tag_ids << tagged_item.tags.create(label: tag['label']).id
        end
      end
      tag_ids += params[:tags].map { |tag| tag['id'] }
    end
    tagged_item.taggings.where.not(tag_id: tag_ids).destroy_all
  end
end
