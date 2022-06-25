Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create, :show] do # signup, #user show page
      resources :pins, only: [:index]
      resources :boards, only: [:index]
    end
    resource :session, only: [:create, :destroy]  #login, logout
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :boards, only: [:show, :create, :update, :destroy]
  end
  root to: 'static_pages#root'
end