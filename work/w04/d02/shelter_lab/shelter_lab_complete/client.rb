
# 	1 - Make a class of Client (THIS IS DONE FOR YOU!)
# 	2 - Give this class an initialize method that takes name, age, gender, and number_of_pets
# 	    as arguments, and assigns them to instance variables so that other methods can access them.
# 	3 - Use the attr_reader, attr_writer, or attr_accessor methods to do the following:
# 		a) Make name, age, and gender read-only (after-all, these are *mostly* things that won't change)
# 		b) Make number_of_pets readable AND writable (we should be able to see AND modify it)


class Client

  attr_reader :name, :age, :gender
  attr_accessor :number_of_pets

  def initialize(name, age, gender, number_of_pets)
    @name = name
    @age = age
    @gender = gender
    @number_of_pets = number_of_pets
  end

end