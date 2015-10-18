defmodule Qgen.Repo.Migrations.CreatePower do
  use Ecto.Migration

  def change do
    create table(:powers) do
      add :name, :string
      add :description, :string

      timestamps
    end

  end
end
