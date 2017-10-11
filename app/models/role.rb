class Role < ApplicationRecord
  extend Enumerize
  enumerize :name, in: [:admin, :accountant, :member]

  # validation
  validates :name, presence: true

  # assication
  has_many :user_roles
  has_many :roles, through: :user_roles
end
