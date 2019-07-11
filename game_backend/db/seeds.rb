# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users

user1 = User.create(name: 'Billy')
user2 = User.create(name: 'Sam')
user3 = User.create(name: 'Eric')
user4 = User.create(name: 'Jen')
user5 = User.create(name: 'Emily')
user6 = User.create(name: 'Maruf')
user7 = User.create(name: 'Stefan')

# Games

game1 = Game.create(time: 40, score: 50, user: user1)
game2 = Game.create(time: 30, score: 60, user: user1)
game3 = Game.create(time: 25, score: 65, user: user2)