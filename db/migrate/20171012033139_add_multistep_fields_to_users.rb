class AddMultistepFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :signup_process_completed, :boolean, default: false
    add_column :users, :current_step, :integer, default: 1
  end
end
