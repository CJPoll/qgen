Rails.application.routes.draw do
  get 'users/search', defaults: {format: :json}

  get 'campaigns', controller: :campaigns, action: :index
  post 'campaigns', controller: :campaigns, action: :create
  get 'campaigns/new', controller: :campaigns, actions: :new
  get 'campaigns/:id', controller: :campaigns, action: :show, as: :campaign
  get 'campaigns/:id/edit', controller: :campaigns, action: :edit

  get 'powers/index'

  get 'backgrounds', controller: :backgrounds, action: :index
  get 'powers', controller: :powers, action: :index

  post 'characters', controller: :characters, action: :create
  get 'characters', controller: :characters, action: :index
  get 'characters/new'
  get 'characters/new/*anything', controller: :characters, action: :new
  get 'characters/:id', controller: :characters, action: :show, as: :character

  devise_for :users
  root controller: :static, action: :landing

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
