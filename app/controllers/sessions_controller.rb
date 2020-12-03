class SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session, only: [:respond_with]
  
  
    private
  
    def respond_with(resource, _opts = {})
      render_jsonapi_response(resource)
    end
  
    def respond_to_on_destroy
      head :no_content
    end
  
  end