class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :phone
      t.string :organisation
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
