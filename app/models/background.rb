##
# Model that represents a character's background/profession
class Background < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true

  has_many :characters
end
