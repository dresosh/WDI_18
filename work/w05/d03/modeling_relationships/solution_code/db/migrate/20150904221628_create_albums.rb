class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.text :poster
      t.integer :artist_id
      t.float :price
      t.timestamps null: false
    end
  end
end
