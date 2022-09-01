Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "schools#index"

  # COURSE

  get "/courses", to: "courses#index"
  get '/courses/:id', to: 'courses#show'
  get '/courses/:id/students', to: 'courses#show_students'
  post '/courses', to: 'courses#create'
  patch '/courses/:id', to: 'courses#update'

  # STUDENT

  get '/students', to: 'students#index'
  get '/students/:id', to: 'students#show'
  post '/students', to: 'students#create'
  patch '/students/:id', to: 'students#update'

  # TEACHER
  get '/teachers', to: 'teachers#index'
  get '/teachers/:id', to: 'teachers#show'
  post '/teachers', to: 'teachers#create'
  patch '/teachers/:id', to: 'teachers#update'

  # SEAT
  get '/seats', to: 'seats#index'
  get '/seats/:id', to: 'seats#show'
  post '/seats', to: 'seats#create'
  patch '/seats/:id', to: 'seats#update'
  delete '/seats/:id', to: 'seats#destroy'
  delete '/seats/:course_id/:student_id', to: 'seats#destroy_based_on'

  get "/schools", to: "schools#show"

end
