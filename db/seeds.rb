# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(first_name: "Bob", last_name: "Belcher", email: 'bob@burgers.com', phone: '3125555555')

Address.create(street: '123 burger way', city: "Seymor's Bay", state: "NY", zip: 60660, user_id: user1.id)

user2 = User.create(first_name: "Linda", last_name: "Belcher", email: 'linda@burgers.com', phone: '3125555555')

Address.create(street: '123 burger way', city: "Seymor's Bay", state: "NY", zip: 60660, user_id: user2.id)