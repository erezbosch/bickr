Rails.application.routes.draw do
  root 'static_pages#root'
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]
end
