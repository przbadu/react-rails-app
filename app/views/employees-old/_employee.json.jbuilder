json.extract! employee, :id, :name, :email, :manager
json.url employee_url(employee, format: :json)
