defmodule Qgen.Character do
  use Qgen.Web, :model

  schema "characters" do
    field :first_name, :string
    field :last_name, :string
    field :backstory, :string
    field :private_backstory, :string

    belongs_to :user, Qgen.User
    belongs_to :background, Qgen.Background
    belongs_to :campaign, Qgen.Campaign

    timestamps
  end

  @required_fields ~w(first_name last_name backstory private_backstory user_id)
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
