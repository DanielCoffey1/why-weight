Rails.application.routes.draw do
  root 'categories#index'
  devise_for :users

  resources :users, only: [:index, :create, :show]
  resources :categories, only: [:index] do
    resources :workouts, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
