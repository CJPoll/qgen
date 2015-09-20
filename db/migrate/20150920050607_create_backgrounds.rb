class CreateBackgrounds < ActiveRecord::Migration
  def change
    create_table :backgrounds do |t|
      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
