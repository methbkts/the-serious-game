Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'contact', to: 'home#contact'
  get 'about', to: 'home#about'
end
