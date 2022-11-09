class AddressesController < ApplicationController
  def index
    addresses = Address.all.order("created_at DESC")
    
    render json: addresses
  end

  def create
    address = Address.create(address_params)

    render json: address
  end


  private 
  def address_params 
    params.require(:address).permit(
      :first_name, 
      :last_name, 
      :email, 
      :phone, 
      :street, 
      :city, 
      :state, 
      :zip
    )
  end
end
