class Address < ApplicationRecord
    encrypts :street, deterministic: true
    encrypts :city, deterministic: true
    encrypts :zip, deterministic: true
    encrypts :state, deterministic: true

    belongs_to :user
end
