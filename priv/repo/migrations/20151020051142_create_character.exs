defmodule Qgen.Repo.Migrations.CreateCharacter do
  use Ecto.Migration

  def change do
    create table(:characters) do
      add :first_name, :string
      add :last_name, :string
      add :backstory, :text
      add :private_backstory, :text
      add :user_id, references(:users)
      add :background_id, references(:backgrounds)
      add :campaign_id, references(:campaigns)

      timestamps
    end
    create index(:characters, [:user_id])
    create index(:characters, [:background_id])
    create index(:characters, [:campaign_id])

  end
end
