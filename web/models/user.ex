defmodule Qgen.User do
  use Qgen.Web, :model

  schema "users" do
    field :email, :string
    field :crypted_password, :string
    field :first_name, :string
    field :last_name, :string
    field :password, :string, virtual: true

    has_many :campaigns, Qgen.Campaign

    timestamps
  end

  @required_fields ~w(email password first_name)
  @optional_fields ~w(last_name)

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> validate_length(:password, min: 8)
    |> unique_constraint(:email)
  end
end
