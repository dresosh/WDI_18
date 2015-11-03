# Building Models with ActiveRecord & Migrations

### SWBAT

- Create a class that inherits from ActiveRecord
- Create a table schema to describe the class/model in our database
- Write a migration to update our model with new attributes
- Write a migration to delete a model's attributes


### Preparation
*Before this lesson, students should already be able to:*

- Explain the concept of MVC
- Create a simple Rails app without scaffolding
- Define what object properties and methods are
- Write getter and setter methods to get retrieve and set property values


## Wait, what are Models? - Intro (15 mins)

#### Refresh on Models/Modeling

When we designed classes - or models of objects - we said we were 'modeling' them. When we made the class of Animal, we could have said we were modeling an Animal. We were trying to get a representation of an animal into our code.

#### So what is Active Record?
Active Record is the M in MVC - the model - which is the part of the Rails system responsible for representing data. Active Record facilitates the creation and use of objects whose data should be stored in a database.

Active Record is an ORM framework. 

### So what does ORM mean?

Well, that's where ORMs come in.  ORM stands for: **O**bject **R**elational **M**apping, and it's a technique that connects the objects of an application to tables in a relational database management system. Active Record simply implements the technique of object relational mapping. It basically talks to the SQL database for us. Let's draw on the board how a user object, instantiated from the User class, could map to a Users table in our database.

Let's pretend we have a User class with the attributes name, age, and address:

```ruby
class User < ActiveRecord::Base
  
end
```

And let's pretend that we create a new user, Rob stark, whose object is shown below:

```ruby
=> #<User:0x007fc8b18c5718 @address="1 Winterfell Lane", @age=16, @id=1, @name="Rob Stark">
```

With an ORM, we're able to take that instance of class User and map it to our relational database:

```psql
 id |   name    | age |                      address                      
----+-----------+-----+--------------------------------------------
  1 | Rob Stark |  16 | 1 Winterfell Lane                                  
(1 row)
```

Using ORMs, the properties and relationships of the objects in an application can be easily stored and retrieved from a database without writing SQL statements directly and with less database access code, overall.

#### An Actively Awesome ORM: ActiveRecord

Taken from [rubyonrails.org](guides.rubyonrails.org/active_record_basics.html):

Active Record, as an ORM Framework, gives us several mechanisms, the most important being the ability to:

- represent models and their data
- represent associations between these models
- represent inheritance hierarchies through related models
- validate models before they get persisted to the database
- perform database operations in an object-oriented fashion

Active Record is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic.

This will all make a lot more sense once we start using it...so, let's start using it!


## Back to the beans!

Let's open our beans app and look at how we accessed/manipulated our Bean model.

Take 5 minutes to talk through what each line is doing. What are the methods attached to the Bean model?

------------

### We're going to make an app to play with Active Record!

1 - Go into your workspace (or wherever it is that you create your awesome new apps)

2 - Make a new rails app called "uber_for_dogs" that uses postgres as its database

3 - Let's create this database using an easy one-line command

------------

ASIDE: What is rake db:create?

Rake technically stands for 'ruby make', which is a tool we're going to use to do tasks for us. You can program your own rake functions, but active record comes with a bunch, and we're gonna use one to create our database in Postgres.

Whereas earlier you learned to do this:

```bash
$ psql
psql (9.4.1, server 9.3.5)
Type "help" for help.

username=# create database tunr;
CREATE DATABASE
```

Now, we can wrap that up in one terminal command:

`rake db:create`

Run it. Boom, database created.


#### Makin' Models

As we make some models, we are going to keep an eye on the "db" folder. Specifically, we are going to look at a directory called "db/migrate" and a file called "db/schema.rb".

the schema.rb file is basically what our database looks like. Right now it's empty. Our database has no tables.

In the terminal, let's make a new model


What just happened? Well, rails just created a new User model for us. If we go to the models directory, we will see it there.


```ruby
class User < ActiveRecord::Base
end
```

So again, this is saying: "We want a class named User, and it shall inherit all the code from the Active Record class, which has a bunch of handy methods already written for me."  And now, when you're working with the User class, you'll be able to do ```User.last`` in your code.  This enables ```User.first``` or ```User.new()``` or the other methods it has, without any other code having to be written, as long as we have a database with a User table in it. 


###Migrations

When we made a model, we didn't JUST make a model. We also made instructions on how to make a table in our database. 

	According to the Rails documentation - "Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use Ruby to describe changes to your tables."


	According to me - "A migration is a set of instructions to change your database. If we want to change our database we do it in two steps - we first CREATE the migration (the instructions on how to change our database), then we MIGRATE them (same as running them)"



Your database schema is currently empty. If you run the migration, it creates the table!


### Adding things to our Model

```
rails g migration AddBreedToDog breed:string
```

The convention is like this:

```
rails g migration AddXXXToYYYY XXX:string
```

### Removing things from our model:
```
rails g migration RemoveBreedFromDog breed:string
```

```
rails g migration RemoveXXXFromYYYY XXX:string
```

###

Once a migration has been run you CANNOT change the migration directly again!

....unless you "un-run" it...

```
rake db:rollback
```

how do you know what migrations have been run?

```
rake db:migrate:status
```

### EXTRA RAKE STUFF!

```bash
$ rake -T

rake db:create              # Creates the database f...
rake db:create_migration    # Create a migration (pa...
rake db:drop                # Drops the database fro...
rake db:fixtures:load       # Load fixtures into the...
rake db:migrate             # Migrate the database (...
rake db:migrate:status      # Display status of migr...
rake db:rollback            # Rolls the schema back ...
rake db:schema:cache:clear  # Clear a db/schema_cach...
rake db:schema:cache:dump   # Create a db/schema_cac...
rake db:schema:dump         # Create a db/schema.rb ...
rake db:schema:load         # Load a schema.rb file ...
rake db:seed                # Load the seed data fro...
rake db:setup               # Create the database, l...
rake db:structure:dump      # Dump the database stru...
rake db:structure:load      # Recreate the databases...
rake db:version             # Retrieves the current ...
```

### EXTRA MIGRATION STUFF


According to [the official ActiveRecord docs](http://edgeguides.rubyonrails.org/active_record_migrations.html), these are all the migration definitions the change method allows you to use in a migration:

- add_column
- add_index
- add_reference
- add_timestamps
- add_foreign_key
- create_table
- create_join_table
- drop_table (must supply a block)
- drop_join_table (must supply a block)
- remove_timestamps
- rename_column
- rename_index
- remove_reference
- rename_table

As always, if you can't remember the exact syntax, take to the Google!



## Conclusion (5 mins)
- What is ActiveRecord and how does it interact with your database?
- What are migrations?
