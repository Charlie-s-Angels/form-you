class RegistrationsController < Devise::RegistrationsController
  protect_from_forgery with: :null_session, only: [:create]

  def create
    build_resource(sign_up_params)
    resource.save
    sign_up(resource_name, resource) if resource.persisted?

    render_jsonapi_response(resource)
  end
end
