Rails.application.routes.draw do
  scope :api do
    get 'users/search', constratins: {format: :json}
    get 'users/:user_id/characters', controller: :characters, action: :index, constraints: {format: :json}
    get 'users/:user_id/campaigns', controller: :campaigns, action: :index, constraints: {format: :json}

    get 'campaigns', controller: :campaigns, action: :index, constraints: {format: :json}
    post 'campaigns', controller: :campaigns, action: :create, constraints: {format: :json}
    get 'campaigns/:id', controller: :campaigns, action: :show, as: :campaign, constraints: {format: :json}
    delete 'campaigns/:id', controller: :campaigns, action: :destroy, constraints: {format: :json}

    get 'powers', controller: :powers, action: :index, constraints: {format: :json}

    get 'backgrounds', controller: :backgrounds, action: :index, constraints: {format: :json}
    get 'powers', controller: :powers, action: :index, constraints: {format: :json}

    get 'characters', controller: :characters, action: :index, constraints: {format: :json}
    post 'characters', controller: :characters, action: :create, constraints: {format: :json}
    put 'characters/:id', controller: :characters, action: :update, constraints: {format: :json}
    get 'characters/new', constraints: {format: :json}
    get 'characters/new/*anything', controller: :characters, action: :new, constraints: {format: :json}
    get 'characters/:id', controller: :characters, action: :show, as: :character, constraints: {format: :json}
    delete 'characters/:id', controller: :characters, action: :destroy, constraints: {format: :json}
  end

  devise_for :users
  root controller: :static, action: :landing
  get '/*any', controller: :static, action: :landing

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
