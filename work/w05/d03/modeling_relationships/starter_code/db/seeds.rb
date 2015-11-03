# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
#
  Artist.create!({ name: "Thomas Sullivan", photo_url: "http://bitbucket.com/1234.jpg", nationality: "English" })
  Artist.create!({ name: "TJ", photo_url: "http://bitbucket.com/12345.jpg", nationality: "Irish" })
  Artist.create!({ name: "Tommy S", photo_url: "http://bitbucket.com/12346.jpg", nationality: "British" })
  Artist.create!({ name: "Sully, T", photo_url: "http://bitbucket.com/12347.jpg", nationality: "UK" })

  Album.create!({title:"UnTitled", poster:"Eric", artist_id: 1, price:5.00})
  Album.create!({title:"Titled", poster:"James", artist_id: 2, price:5.50})
  Album.create!({title:"UnNamed", poster:"Greg", artist_id: 3, price:6.00})
  Album.create!({title:"Named", poster:"Blaise", artist_id: 4, price:6.50})

  Genre.create!({name: "Rock" })
  Genre.create!({name: "Pop" })
  Genre.create!({name: "Country" })
  Genre.create!({name: "Jazz" })
  Genre.create!({name: "Blues" })
  Genre.create!({name: "Indie" })
  Genre.create!({name: "EDM" })
  Genre.create!({name: "Dance" })
