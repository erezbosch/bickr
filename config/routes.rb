Rails.application.routes.draw do
  root 'static_pages#root'
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:create, :index, :show, :update, :destroy]
    resources :users, only: [:index, :show]
    resources :follows, only: [:create, :destroy]
    resources :albums, only: [:create, :index, :show, :update, :destroy]
  end
end
