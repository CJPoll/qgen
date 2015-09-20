##
# Model object representing a character
# A character has:
#   first_name: string    (required)
#   last_name: string     (optional)
#   backstory: text       (optional)
#   background: Bacground (required)
class Character < ActiveRecord::Base
  validates :first_name, presence: true

  belongs_to :background

  validates_presence_of :background
end
