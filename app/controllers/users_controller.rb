class UsersController < ApplicationController
  def index
    @users = User.all

    render json: @users
  end

  def create
    @user = User.create(users_params)

    if @user.valid?  
      render json: {}, status: 200
    else
      render json: { error: "Sorry, something went wrong" }, status: 422
    end
  end

  private 
  def users_params 
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :email, 
      :phone, 
      :address_attributes => [
        :street, 
        :city, 
        :state, 
        :zip
      ]
    )
  end
end
