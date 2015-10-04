class AddCampaignsToUsers < ActiveRecord::Migration
  def change
    create_table :campaigns_users
    add_reference :campaigns_users, :campaign, index: true, foreign_key: true
    add_reference :campaigns_users, :user, index: true, foreign_key: true
  end
end
