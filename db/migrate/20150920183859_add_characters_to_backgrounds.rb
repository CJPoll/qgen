class AddCharactersToBackgrounds < ActiveRecord::Migration
  def change
    add_reference :characters, :background, index: true
  end
end
