fruit_truck = {
  height: "12'",
  weight: "2tons",
  tire_count: 10,
  customers:["percy", "kayla", "steve", "paul", "jeff", "greg", "andre", "leslie", "julie", "kyle", "alex", "adam", "noah", "eric", "blaise", "john"],
  fruits: { apple:20, pear: 100, peach: 50, strawberry: 200 }
}

def list_fruits(fruits)
  puts "--- Produce ---"
  fruits.each do |key, value|
    puts "Fruit: #{key}, Amount: #{value}" unless key === :peach
  end
end

def list_customers(customers)
  puts "---Customers---"
  customers.each do |item|
    if item === "eric" || item === "john" || item === "blaise"
      puts "Instructor: #{item}"
    else
      puts "Student: #{item}"
    end
  end
end

def list_properties(hash)
  hash.each do |key, value|
    if key === :fruits
      list_fruits hash[:fruits]
    elsif key === :customers
      list_customers hash[:customers]
    else
      puts "Property: #{key}, Value: #{value}"
    end
  end
end

list_properties fruit_truck
