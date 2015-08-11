Rails.application.routes.draw do
  root 'static_pages#root'
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:create, :index, :show, :update, :destroy]
  end
end
