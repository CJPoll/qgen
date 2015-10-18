defmodule Qgen.BackgroundController do
  use Qgen.Web, :controller

  alias Qgen.Background

  plug :scrub_params, "background" when action in [:create, :update]

  def index(conn, _params) do
    backgrounds = Repo.all(Background)
    render(conn, "index.json", backgrounds: backgrounds)
  end

  def create(conn, %{"background" => background_params}) do
    changeset = Background.changeset(%Background{}, background_params)

    case Repo.insert(changeset) do
      {:ok, background} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", background_path(conn, :show, background))
        |> render("show.json", background: background)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Qgen.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    background = Repo.get!(Background, id)
    render(conn, "show.json", background: background)
  end

  def update(conn, %{"id" => id, "background" => background_params}) do
    background = Repo.get!(Background, id)
    changeset = Background.changeset(background, background_params)

    case Repo.update(changeset) do
      {:ok, background} ->
        render(conn, "show.json", background: background)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Qgen.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    background = Repo.get!(Background, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(background)

    send_resp(conn, :no_content, "")
  end
end
