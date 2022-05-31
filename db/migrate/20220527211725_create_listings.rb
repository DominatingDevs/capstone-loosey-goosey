class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :location_name
      t.string :location_category
      t.string :happy_hours
      t.string :specials
      t.text :location_image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
