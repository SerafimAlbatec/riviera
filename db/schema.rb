# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150226130511) do

  create_table "albums", force: true do |t|
    t.string   "image"
    t.integer  "gallery_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", force: true do |t|
    t.text     "title"
    t.string   "date"
    t.text     "text"
    t.string   "img1"
    t.string   "img2"
    t.string   "img3"
    t.string   "img4"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "outline"
  end

  create_table "galleries", force: true do |t|
    t.string   "image"
    t.text     "koimeno"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "menus", force: true do |t|
    t.string   "name"
    t.string   "text"
    t.float    "price",      limit: 24
    t.string   "img1"
    t.string   "img2"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "stories", force: true do |t|
    t.string   "title"
    t.text     "text"
    t.string   "date"
    t.string   "img"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
