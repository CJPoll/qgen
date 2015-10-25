defmodule Qgen.Repo.Migrations.CreateCampaignMembership do
  use Ecto.Migration

  def change do
    create table(:campaign_memberships) do
      add :user_id, references(:users)
      add :campaign_id, references(:campaigns)

      timestamps
    end

    create index(:campaign_memberships, [:user_id])
    create index(:campaign_memberships, [:campaign_id])
  end
end
