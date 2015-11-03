# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# beans = Bean.create([
#     {name: "Eric's Ethiopian Harar", roast: "medium", origin: "Ethiopia", quantity: 100},
#     {name: "John's Jittery Java", roast: "hella strong", origin: "Java", quantity: 101},
#     {name: "Blaise's Belgian Brew", roast: "decaf", origin: "France", quantity: 50}
#   ])

# comments = Bean.find(1).comments.create([
#         {commenter: "Noah", body: "Awesome"},
#         {commenter: "Leslie", body: "Love it"},
#         {commenter: "Kyle", body: "Need more coffee!"}
#     ])

comments2 = Bean.find(4).comments.create([
        {commenter: "Kayla", body: "I like OJ better"},
        {commenter: "Paul", body: "I don't drink coffee, I take tea my dear"},
        {commenter: "Jeff", body: "Philz coffeeeee"}
    ])

comments3 = Bean.find(3).comments.create([
        {commenter: "Gregg", body: "I like OJ better"},
        {commenter: "Steve", body: "Baddum tshhhhhh"},
        {commenter: "Andre", body: "Sweeeeeeeet"}
    ])

