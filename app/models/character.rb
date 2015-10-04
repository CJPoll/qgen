##
# Model object representing a character
# A character has:
#   first_name: string    (required)
#   last_name: string     (optional)
#   backstory: text       (optional)
#   background: Bacground (required)
class Character < ActiveRecord::Base
  belongs_to :background
  belongs_to :user
  belongs_to :campaign
  has_and_belongs_to_many :powers

  validates :first_name, presence: true
  validates_presence_of :background
  validates_presence_of :powers
end
