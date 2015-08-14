Rails.application.routes.draw do
  root 'static_pages#root'
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show]
    resources :photos, only: [:create, :index, :show, :update, :destroy]
    resources :albums, only: [:create, :index, :show, :update, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :tags, only: [:create, :destroy]
  end
end
