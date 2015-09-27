class JoinPowersAndCharacters < ActiveRecord::Migration
  def change
    create_table :characters_powers do |t|
      t.references :character, index: true
      t.references :power, index: true
    end
  end
end
