Rails.application.routes.draw do
  # get 'addresses/index'
  # get 'addresses/create'
  # get 'users/index'
  # get 'users/create'

  Rails.application.routes.draw do 
    scope '/api/v1/' do 
      resources :users 
      resources :addresses
    end
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
