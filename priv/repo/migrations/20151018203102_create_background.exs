defmodule Qgen.Repo.Migrations.CreateBackground do
  use Ecto.Migration

  def change do
    create table(:backgrounds) do
      add :name, :string
      add :description, :string

      timestamps
    end

  end
end
