class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :manager
end
