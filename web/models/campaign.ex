defmodule Qgen.Campaign do
  use Qgen.Web, :model

  schema "campaigns" do
    field :name, :string

    belongs_to :user, Qgen.User

    has_many :campaign_memberships, Qgen.CampaignMembership, on_delete: :delete_all
    has_many :users, through: [:campaign_memberships, :user]

    timestamps
  end

  @required_fields ~w(name user_id)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  def add_player(campaign, player_id) do
    membership = %Qgen.CampaignMembership{}
    params = %{"user_id" => player_id, "campaign_id" => campaign.id}
    Qgen.CampaignMembership.changeset(membership, params)
  end
end
