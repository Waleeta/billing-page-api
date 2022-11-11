class AddressesController < ApplicationController
  
  def index
    @addresses = Address.all
    
    users_with_addresses = []
    user = {}

    @addresses.each do |address|
      if address.user
        user_name = address.user.first_name + ' ' + address.user.last_name
        users_with_addresses << user[address.user.id] = {name: user_name, address: address}
      end
    end

    render json: users_with_addresses, status: 200
  end

  private 
  
  def address_params 
    params.require(:address).permit(
      :street, 
      :city, 
      :state, 
      :zip
    )
  end
end