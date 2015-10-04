class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  has_many :characters
  has_many :own_campaigns, class_name: 'Campaign'
  has_and_belongs_to_many :campaigns, unique: true

  validates :first_name, presence: true
  validates :last_name, presence: true

  def join_campaign campaign
    self.campaigns << campaign
  end

  def make_campaign campaign
    self.own_campaigns << campaign
  end

  def all_campaigns
    self.own_campaigns + self.campaigns
  end

  def self.search_for query
    self.where(['lower(first_name) LIKE :query', {query: "%#{query.downcase}%"}])
  end
end
