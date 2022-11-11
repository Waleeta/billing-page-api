class User < ApplicationRecord
    encrypts :email, deterministic: true
    encrypts :first_name, deterministic: true 
    encrypts :last_name, deterministic: true
    encrypts :phone, deterministic: true
    
    has_one :address
    accepts_nested_attributes_for :address
end
