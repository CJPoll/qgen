defmodule Qgen.CampaignController do
  use Qgen.Web, :controller
  alias Passport.SessionManager
  require Logger

  alias Qgen.Campaign

  plug :scrub_params, "campaign" when action in [:create, :update]

  def index(conn, _params) do
    current_user = SessionManager.current_user(conn)
    query = from c in Campaign, where: c.user_id == ^current_user.id
    campaigns = Repo.all(query) |> Repo.preload([:user])
    render(conn, "index.json", campaigns: campaigns)
  end

  def create(conn, %{"campaign" => params}) do

    current_user = SessionManager.current_user(conn)
    campaign_params = Map.put(params, "user_id", current_user.id)
    changeset = Campaign.changeset(%Campaign{}, campaign_params)

    case Repo.insert(changeset) do
      {:ok, campaign} ->
        preloaded_campaign = campaign |> Repo.preload([:user])
        conn
        |> put_status(:created)
        |> put_resp_header("location", campaign_path(conn, :show, campaign))
        |> render("show.json", campaign: preloaded_campaign)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Qgen.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    campaign = Repo.get!(Campaign, id) |> Repo.preload([:user])
    render(conn, "show.json", campaign: campaign)
  end

  def update(conn, %{"id" => id, "campaign" => campaign_params}) do
    campaign = Repo.get!(Campaign, id) |> Repo.preload([:user])
    changeset = Campaign.changeset(campaign, campaign_params)

    case Repo.update(changeset) do
      {:ok, campaign} ->
        render(conn, "show.json", campaign: campaign)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Qgen.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    campaign = Repo.get!(Campaign, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(campaign)

    send_resp(conn, :no_content, "")
  end
end
