Rails.application.routes.draw do
  root 'static_pages#root'
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]
  resources :photos, only: :show

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:create, :index, :show, :update, :destroy]
    resources :albums, only: [:create, :index, :show, :update, :destroy]
    resources :users, only: [:index, :show, :update]
    resources :follows, only: [:create, :destroy]
    resources :tags, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :update, :destroy]
  end
end
