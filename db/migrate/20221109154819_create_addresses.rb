class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :city
      t.integer :zip
      t.string :state
      t.integer :user_id

      t.timestamps
    end
  end
end
