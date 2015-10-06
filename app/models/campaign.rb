class Campaign < ActiveRecord::Base
  belongs_to :user, class_name: 'User', foreign_key: 'user_id'

  has_and_belongs_to_many :players, class_name: 'User', table_name: 'campaigns_users'
  has_many :characters, dependent: :nullify

  validates :name, presence: true
  validates_presence_of :owner

  alias_attribute :owner, :user
end
