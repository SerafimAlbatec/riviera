class CreateGalleries < ActiveRecord::Migration
  def change
    create_table :galleries do |t|
      t.string :image
      t.text :koimeno

      t.timestamps
    end
  end
end
