class Employee < ApplicationRecord
  validates :name, :email, :manager, presence: true

  belongs_to :user
end
