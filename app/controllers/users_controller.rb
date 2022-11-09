class UsersController < ApplicationController
  def index
    users = User.all.order("created_at DESC")

    render json: users
  end

  def create
    user = User.create(users_params)

    render json: user
  end

  private 
  def users_params 
    params.require(:user).permit(:first_name, :last_name, :email, :phone)
  end
end
