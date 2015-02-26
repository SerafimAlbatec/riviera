class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.text :text
      t.string :date
      t.string :img

      t.timestamps
    end
  end
end
