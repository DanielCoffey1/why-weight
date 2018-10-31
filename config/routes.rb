Rails.application.routes.draw do
  root 'categories#index'
  devise_for :users

  resources :users, only: [:index, :create, :show]
  resources :categories, only: [:index, :show] do
    resources :workouts, only: [:index]
  end

  namespace :api do
    namespace :v1 do
      resources :categories, only: [:index, :show]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
