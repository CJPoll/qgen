class CreateBeasts < ActiveRecord::Migration
  def change
    create_table :beasts do |t|
      t.string :name
      t.string :challenge
      t.text :strategy

      t.timestamps null: false
    end
  end
end
