Rails.application.routes.draw do
  devise_for :users
  root 'employees#index'
  resources :employees

  constraints format: :json do
    namespace :api do
      namespace :v1 do
        resources :employees, except: [:new, :edit]
      end
    end
  end
end
