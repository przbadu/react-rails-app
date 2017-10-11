class Employee < ApplicationRecord
  validates :name, :email, presence: true

  belongs_to :user
end
