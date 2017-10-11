class Api::V1::EmployeesController < Api::V1::Base
  before_action :set_employee, only: [:show, :update]

  def index
    @employee = policy_scope(Employee)
    render json: @employee
  end

  def show
    authorize @employee
    render json: @employee
  end

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      render json: @employee, status: :created
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  def update
    authorize @employee

    if @employee.update(employee_params)
      render json: @employee, status: :ok
    else
      render json: @employee, status: :unprocessable_entity
    end
  end

  private

  def set_employee
    @employee = Employee.find(params[:employee])
  end

  def employee_params
    params.require(:employee).permit(:name, :email, :manager)
  end
end
