class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :commenter
      t.text :body
      t.integer :rank
      t.belongs_to :book
      t.timestamps
    end
  end
end
