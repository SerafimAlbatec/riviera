class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :image
      t.integer :gallery_id

      t.timestamps
    end
  end
end
