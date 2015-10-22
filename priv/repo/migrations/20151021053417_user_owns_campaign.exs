defmodule Qgen.Repo.Migrations.UserOwnsCampaign do
  use Ecto.Migration

  def change do
    alter table(:campaigns) do
      add :user_id, references(:users)
    end
  end
end
