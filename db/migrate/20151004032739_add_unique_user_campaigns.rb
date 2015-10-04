class AddUniqueUserCampaigns < ActiveRecord::Migration
  def change
    add_index :campaigns_users, [:campaign_id, :user_id], unique: true
  end
end
