class StaticPagesController < ApplicationController
  before_action :redirect_unless_logged_in
  
  def root
  end
end
