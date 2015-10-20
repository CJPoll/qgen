defmodule Qgen.PageController do
  use Qgen.Web, :controller
  alias Passport.SessionManager

  plug :fetch_session

  def index(conn, _params) do
    cond do
      SessionManager.logged_in?(conn) ->
        render conn, "index.html"
      true ->
        conn
        |> redirect to: "/login"
    end
  end
end
