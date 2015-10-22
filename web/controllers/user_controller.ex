defmodule Qgen.UserController do
  use Qgen.Web, :controller
  alias Passport.RegistrationManager
  alias Passport.SessionManager

  plug :scrub_params, "campaign" when action in [:create, :update]

  def register(connection, registration_params) do
    case RegistrationManager.register(registration_params["user"]) do
      {:ok, changeset} ->
        render(connection, "show.json", user: changeset)
      {:error, changeset} ->
        connection
        |> send_resp(422, "Failed")
    end
  end

  def login(connection, %{"user" => session_params}) do
    case SessionManager.login(connection, session_params) do
      {:ok, connection, user} ->
        connection
        |> render("show.json", user: user)
      {:error, connection} ->
        connection
        |> send_resp(422, "Failed")
    end
  end

  def logout(connection, _params) do
    connection
    |> SessionManager.logout
    |> send_resp(200, "")
  end

  def new_session(connection, _params) do
    render(connection, "index.html", layout: {Qgen.LayoutView, "user.html"})
  end

  def current_user(connection, _params) do
    user = SessionManager.current_user(connection)
    cond do
      user ->
        render(connection, "show.json", user: user)
      true ->
        render(connection, "empty.json")
    end
  end

  def search(connection, %{"query" => name}) do
    case name do
      "" ->
        users = []
      _else ->
        name = String.downcase("%" <> name <> "%")
        users = Repo.all from u in Qgen.User,
          where: ilike(u.first_name, ^name) or ilike(u.last_name, ^name)
    end

    render(connection, "index.json", users: users)
  end
end
