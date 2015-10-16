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

ActiveRecord::Schema.define(version: 20151016020948) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backgrounds", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "beasts", force: :cascade do |t|
    t.string   "name"
    t.string   "challenge"
    t.text     "strategy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "campaigns", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "campaigns", ["user_id"], name: "index_campaigns_on_user_id", using: :btree

  create_table "campaigns_users", force: :cascade do |t|
    t.integer "campaign_id"
    t.integer "user_id"
  end

  add_index "campaigns_users", ["campaign_id", "user_id"], name: "index_campaigns_users_on_campaign_id_and_user_id", unique: true, using: :btree
  add_index "campaigns_users", ["campaign_id"], name: "index_campaigns_users_on_campaign_id", using: :btree
  add_index "campaigns_users", ["user_id"], name: "index_campaigns_users_on_user_id", using: :btree

  create_table "characters", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.text     "backstory"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "background_id"
    t.integer  "user_id"
    t.integer  "campaign_id"
  end

  add_index "characters", ["background_id"], name: "index_characters_on_background_id", using: :btree
  add_index "characters", ["campaign_id"], name: "index_characters_on_campaign_id", using: :btree
  add_index "characters", ["user_id"], name: "index_characters_on_user_id", using: :btree

  create_table "characters_powers", force: :cascade do |t|
    t.integer "character_id"
    t.integer "power_id"
  end

  add_index "characters_powers", ["character_id"], name: "index_characters_powers_on_character_id", using: :btree
  add_index "characters_powers", ["power_id"], name: "index_characters_powers_on_power_id", using: :btree

  create_table "powers", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "sessions", force: :cascade do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["provider"], name: "index_users_on_provider", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["uid"], name: "index_users_on_uid", using: :btree

  add_foreign_key "campaigns", "users"
  add_foreign_key "campaigns_users", "campaigns"
  add_foreign_key "campaigns_users", "users"
  add_foreign_key "characters", "campaigns"
  add_foreign_key "characters", "users"
end
