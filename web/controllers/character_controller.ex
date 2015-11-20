defmodule Qgen.CharacterController do
  use Qgen.Web, :controller
  alias Passport.SessionManager
  alias Qgen.Character
  require Logger

  plug :scrub_params, "character" when action in [:create, :update]

  def index(conn, _params) do
    current_user = SessionManager.current_user(conn)
                    |> Repo.preload([:characters, :campaigns])
    characters = current_user.characters
    render(conn, "index.json", characters: characters)
  end

  def create(conn, %{"character" => character_params}) do
    current_user = SessionManager.current_user(conn)
    changeset = Character.changeset(%Character{}, character_params)
                |> Character.changeset(%{"user" => current_user})

    case Repo.insert(changeset) do
      {:ok, character} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", character_path(conn, :show, character))
        |> render("show.json", character: character)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Qgen.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    character = Repo.get!(Character, id)
    render(conn, "show.json", character: character)
  end

  def update(conn, %{"id" => id, "character" => character_params}) do
    character = Repo.get!(Character, id)
    changeset = Character.changeset(character, character_params)

    case Repo.update(changeset) do
      {:ok, character} ->
        render(conn, "show.json", character: character)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Qgen.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    character = Repo.get!(Character, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(character)

    send_resp(conn, :no_content, "")
  end
end
