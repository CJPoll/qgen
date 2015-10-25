defmodule Qgen.CampaignMembership do
  use Qgen.Web, :model

  schema "campaign_memberships" do
    belongs_to :user, Qgen.User
    belongs_to :campaign, Qgen.Campaign

    timestamps
  end

  @required_fields ~w(user_id campaign_id)
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
end
