class ApplicationController < ActionController::Base
  include Pundit
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  def after_sign_in_path_for(resource)
    if resource.is_a?(User) && resource.signup_process_completed?
      super
    else
      new_signup_process_url
    end
  end
end
