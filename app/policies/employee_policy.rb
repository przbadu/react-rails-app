class EmployeePolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    index?
  end

  def create?
    true
  end

  def update?
    show?
  end

  class Scope < Scope
    def resolve
      if user.admin?
        scope.all
      else
        scope.where(user_id: user.id)
      end
    end
  end
end
