class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.text :title
      t.string :date
      t.text :text
      t.string :img1
      t.string :img2
      t.string :img3
      t.string :img4

      t.timestamps
    end
  end
end
