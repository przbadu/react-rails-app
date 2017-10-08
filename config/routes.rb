Rails.application.routes.draw do
  root 'employees#index'
  resources :employees
  get 'hello_world', to: 'hello_world#index'
end
