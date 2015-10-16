class Beast < ActiveRecord::Base
  validates :name, uniqueness: true
  validates :challenge, inclusion: { in: %w(easy moderate challenging epic) }
end
