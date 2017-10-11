class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :country
      t.string :city
      t.string :zipcode
      t.text :address_line_1
      t.text :address_line_2
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
