class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable,
    :omniauthable, omniauth_providers: [:slack]

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

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.first_name = auth.info.first_name
      user.last_name = auth.info.last_name
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.slack_data"] && session["devise.slack_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  protected
  def self.auth_params(auth)
    {
      first_name: auth['first_name'],
      last_name: auth['last_name'],
      email: auth['email']
    }
  end
end
