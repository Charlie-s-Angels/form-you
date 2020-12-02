Rails.application.routes.draw do

  # To avoid conflicts with Devise's own namespacing logic we'll manually set our authentication routes
  namespace :api, defaults: { format: :json } do
    resources :users, only: %w[show]
  end
  
  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/login',
      sign_out: 'api/logout',
      registration: 'api/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


