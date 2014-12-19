class CreateEventpages < ActiveRecord::Migration
  def change
    create_table :eventpages do |t|
      t.string :title
      t.string :image
      t.text :text

      t.timestamps
    end
  end
end
