##
# Model that represents a character's background/profession
class Background < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
