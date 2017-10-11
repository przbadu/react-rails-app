class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  # Associations
  has_one :profile
  has_one :contact

  has_many :addresses
  has_many :user_roles
  has_many :roles, through: :user_roles

  def admin?
    self.roles.exists?(name: :admin)
  end

  def accountant?
    self.roles.exists?(name: :accountant)
  end

  def member?
    self.roles.exists?(name: :member)
  end

  def owned?(resource)
    self.id == resource.user_id
  end
end
