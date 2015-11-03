require "./Dog.rb"

class Puppy < Dog

  def initialize name

    @name = name
    @asleep = false
    @foodInTummy = 0  
    @stuffInBotty =  1  # He doesn't need to go.
    @happiness = 0

    puts "
Lo! #{@name} is born! You can feed, walk, putToBed, tickle, or rock your new puppy to sleep! When you get bored, just put #{@name} to sleep (permanently)
    "
    puts "#{@name} is whimpering"
    puts "#{@name}'s tummy is rumbling
    "
  end

  def speak
    puts "woof!"
  end

  def feed
    puts "You feed #{@name}"
    @foodInTummy += 10
    if @foodInTummy >= 50
      puts "#{@name} is looking a little chubby"
    end
    passageOfTime
  end

  def walk
    puts "You take #{@name} for a walk. #{@name} poops"
    @foodInTummy -= 10
    @stuffInBotty = 0
    @happiness += 25
    passageOfTime
  end

  def putToBed
    puts "You put #{@name} to bed"
    @asleep = true
    3.times do
      if @asleep
        passageOfTime
      end
      if @asleep
        puts "#{@name} snores quietly"
      end
    end
    if @asleep
      @asleep = false
      puts "#{@name} wakes up slowly"
    end
  end

  def tickle
    puts "You tickle #{@name}'s tummy."
    @happiness += 25
    puts "#{@name} giggles "
    passageOfTime
  end

  def putToSleep
    puts "you take #{@name} to the vet and put him to sleep for one last time :("
    exit
  end

  def rock
    puts 'You rock ' + @name + ' gently.'
    @asleep = true
    puts 'He briefly dozes off...'
    passageOfTime
    if @asleep
      @asleep = false
      puts '...but wakes when you stop.'
    end
  end

  def hungry?
    # Method names can end with "?".
    # Usually, we only do this if the method
    # returns true or false, like this:
    @foodInTummy <= 2
  end

  def poopy?
    @stuffInBotty >= 8
  end

  def happy?
    @happiness >= 30
  end

  def passageOfTime
    @happiness -= 10
    
    if @foodInTummy > 0
      # Move food from tummy to botty.
      @foodInTummy = @foodInTummy - 1
      @stuffInBotty = @stuffInBotty + 1

    else  # Our puppy is starving!
      if @asleep
        @asleep = false
        puts "#{@name} wakes up suddenly"
      end
      puts "#{@name} starved to death"
      exit  # This quits the program.
    end

    if @foodInTummy < 15
      puts "#{@name} is getting a rumbly tummy!"

    end

    if @stuffInBotty >= 10
      @stuffInBotty = 0
      puts "Whoopsy! #{@name} had an accident..."
    end

    if hungry?
      if @asleep
        @asleep = false
        puts "#{@name} wakes up suddenly, whining"
      end
      puts "#{@name}'s stomach starts to rumble"
    end

    if poopy?
      if @asleep
        @asleep = false
        puts "#{@name} wakes up suddenly"
      end
      puts "#{@name} does the potty dance"
    end

    if happy?
      puts "#{@name}'s tail wags happily!"
    else
      puts "#{@name} whimpers pathetically"
    end

    
  end

end