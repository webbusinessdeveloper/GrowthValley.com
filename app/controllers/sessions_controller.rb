class SessionsController < Devise::SessionsController

  def create
    resource = warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
    sign_in_and_redirect(resource_name, resource)
  end

  def inactive
	  clean_up_passwords resource
      respond_to do |format|
        format.html {
        redirect_to root_path, alert: flash[:alert]
        }
        format.js {
          render :json => { success: false, error: flash[:alert] }
        }
      end
  end

  def sign_in_and_redirect(resource_or_scope, resource=nil)
    scope = Devise::Mapping.find_scope!(resource_or_scope)
    resource ||= resource_or_scope
    sign_in(scope, resource) unless warden.user(scope) == resource
    flash[:notice] = 'Logged in successfully!'
    if current_user.type == "Learner"
		  redirect_url = dashboard_path
	 else
		redirect_url = root_url
	 end

    respond_to do |format|
      format.html {

        redirect_to redirect_url
      }
      format.js {
        unless current_user.sign_in_count > 1 && current_user.profile_pic_url.present?
          render js: "window.location.assign('#{edit_user_registration_url}')"
        else
          render js: "window.location.assign('#{redirect_url}')"
        end
      }
    end
  end

  def failure
    respond_to do |format|
      format.html {
        redirect_to root_path, alert: 'Login failed!'
      }
      format.js {
        render :json => { success: false, error: "Invalid username or password!" }
      }
    end
  end
end
