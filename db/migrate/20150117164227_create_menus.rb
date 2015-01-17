class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.string :name
      t.string :text
      t.float :price
      t.string :img1
      t.string :img2

      t.timestamps
    end
  end
end
