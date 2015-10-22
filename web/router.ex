defmodule Qgen.Router do
  use Qgen.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
  end

  scope "/api", Qgen do
    pipe_through :api

    resources "/campaigns", CampaignController, except: [:new, :edit]
    resources "/backgrounds", BackgroundController, except: [:new, :edit]
    resources "/powers", PowerController, except: [:new, :edit]
    resources "/characters", CharacterController, except: [:new, :edit]

    get "/self", UserController, :current_user
    get "/users/search", UserController, :search

    delete "/logout", UserController, :logout
    post "/login", UserController, :login
    post "/register", UserController, :register
  end

  scope "/", Qgen do
    pipe_through :browser # Use the default browser stack

    get "/login", UserController, :new_session
    get "/*anything", PageController, :index
  end
end
