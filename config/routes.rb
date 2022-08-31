Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "schools#index"

  # COURSE

  get "/courses", to: "courses#index"
  post '/courses', to: 'courses#create'

  # STUDENT

  get '/students', to: 'students#index'
  post '/students', to: 'students#create'

  # TEACHER
  get '/teachers', to: 'teachers#index'
  post '/teachers', to: 'teachers#create'

  # SEAT
  get '/seats', to: 'seats#index'
  post '/seats', to: 'seats#create'



end
