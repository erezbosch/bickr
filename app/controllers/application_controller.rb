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

  helper_method :current_user
end
