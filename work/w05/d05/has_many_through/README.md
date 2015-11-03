#has_many_through
Goes with the Lesson: Relationships and multiple models -- has_many, belongs_to_many, etc + Database Design

_Ira Herman WDI LA_
_Based on the lesson by Richard Grossman_

##SWBAT
* Understand many-to-many via examples and in diagrams
* Create all 3 models to support many-to-many wireframes
* Create the associations to implement many-to-many in Rails
* Set the parameters in controllers that permit passing of the join-table data from a form
* Create code in views that take advantage of Rails support for many-to-many

##LAB:

###GENERATE A NEW APPLICATION

1  
Create new rails app: 
```rails new railscafe5000 -T```

2  
Switch to the project folder  

    cd railscafe5000  
    
3  
Open in sublime: subl .  

7  
Terminal:      

    rails g scaffold bean name roast origin quantity:integer
    
9  
```rake db:migrate```  

10  
In sublime, open and review the schema  

11  
Schema is not updated until db:migrate or related db: command is run  

12  
Notice timestamps are added - you can see that  

13  
ID is also added - you can't see that in the schema  

14  
Terminal:  

    rails g scaffold pastry name dept price:decimal        

15 

    rake db:migrate

16  
In sublime, open and review the schema and the migrations  
<br>
17  
Terminal: 

    rails g model beanpastry bean:belongs_to pastry:belongs_to  
    
_Note: You can use either belongs_to (newer syntax) or references (older) in the rails g line_

19  
Sublime: Once again, look at the schema and model names  

Check out the newest migration file. Notice the foreign keys.

```rake db:migrate```

20  
Looking at the beanpastry.rb, we see the class is called Beanpastry  

21  
Notice how the the Beanpastry model already has:

    belongs_to :bean  
    belongs_to :pastry  

Thanks rails g! 
(it added those because we used belongs_to in the rails g model line)

22  
Open bean.rb, and add:  
 
    has_many :beanpastries
    has_many :pastries, through: :beanpastries   
<br>
23  
Open pastry.rb, and add:  

    has_many :beanpastries  
    has_many :beans, through: :beanpastries  

<br>
24  
Open beans_controller.rb, and change:  

    def bean_params
        params.require(:bean).permit(:name, :roast, :origin, :quantity)
    end  

**to**  

    def bean_params  
        params.require(:bean).permit(:name, :roast, :origin, :quantity, pastry_ids: [])  
    end  
<br>
25  
In the config / routes.db, add  

    root "beans#index"

26  
In the views / layouts / application.html.erb, add this on a new line after the BODY tag:  

    <h4> Rails Cafe 5000 </h4>  
 
<br>
27  
Terminal: start the server: ```rails s```  
<br>
28  
Browser: ```localhost:3000```  
<br>
29  
These pages should display without error, and you should be able to add/edit beans and pastries  

    localhost:3000/beans  
    localhost:3000/pastries  

<br>
30  
So far, so good.  However, we are not actually displaying or using the many-to-many relationship.  
<br>
31  
Sublime: Open views / beans / edit.html.erb  
Remove the line with "render form"  
<br>
32  
Open views / beans /layouts/ _form.html.erb, copy the entire contents, and paste it to edit.html.erb,
below your h1 tag and above your link_to tags.  Then add this code right above div class="actions":


```
   Goes great with:<br>
  <%= f.collection_check_boxes :pastry_ids, Pastry.all, :id, :name %>
  <br><br>
```

Now it should look like this:

```  
	<h1>Editing Bean</h1>
	
	<%= form_for(@bean) do |f| %>
	  <% if @bean.errors.any? %>
	    <div id="error_explanation">
	      <h2><%= pluralize(@bean.errors.count, "error") %> prohibited this bean from being saved:</h2>
	
	      <ul>
	      <% @bean.errors.full_messages.each do |message| %>
	        <li><%= message %></li>
	      <% end %>
	      </ul>
	    </div>
	  <% end %>
	
	  <div class="field">
	    <%= f.label :name %><br>
	    <%= f.text_field :name %>
	  </div>
	  <div class="field">
	    <%= f.label :roast %><br>
	    <%= f.text_field :roast %>
	  </div>
	  <div class="field">
	    <%= f.label :origin %><br>
	    <%= f.text_field :origin %>
	  </div>
	  <div class="field">
	    <%= f.label :quantity %><br>
	    <%= f.number_field :quantity %>
	  </div>
	
	  Goes great with:<br>
	  <%= f.collection_check_boxes :pastry_ids, Pastry.all, :id, :name %>
	  <br><br>
	
	  <div class="actions">
	    <%= f.submit %>
	  </div>
	<% end %>
	
	<%= link_to 'Show', @bean %> |
	<%= link_to 'Back', beans_path %>

```

<br>
33  
Open views /beans / show.html.erb, and add this at the bottom:  
    <br>  
    
    <b>SUGGEST PAIRING IT WITH:</b><br>  
    <% @bean.pastries.each do |one_pastry| %>  
    	<%= one_pastry.name %><br>
    <% end %>
    <br>  

34  
Check it out in the browser: 

* Create a few beans and a few pastries.
* Associate at least one pastry with each bean.

35  
Try adding this above your link_to's in the show.html.erb file:  

    <br>
    <b>FIRST CHOICE</b><br>
    <%= @bean.pastries.first.name if @bean.pastries.first %>
    <br>
    <br>
<br>
36  
In the beans/index.html.erb:

After this:

		<td><%= link_to 'Destroy', bean, method: :delete, data: { confirm: 'Are you sure?' } %></td>
		</tr>

Insert this:

      <tr>
        <td>       Recommended pastries:
          <br>
          <% bean.pastries.each do |one_pastry| %>
          <%= one_pastry.name %><br>
          <% end %>
          <br><br>
        </td>
      </tr>
      
Why does it say bean.pastries.each and not @bean.pastries.each?  

37  

TROUBLESHOOTING    
"No method named "pastries"", "Invalid constant", "and similar messages mean that your associations (has many and has many   through) are not working.  They are either missing, or incorrectly referencing the join table.  

<br>
<br>

## INDEXES
An index is a special kind of table that is a sorted list of one (or more) fields, and the id number where it's found. It increases database performance when pulling up records by a field other than its ID.

It's like the index in the back of a book - a lookup table to quickly find the information.

Compound indexes have concatenated fields.  

Databases may also use other performance tricks to speed up indexes, such as loading them completely into memory, or using b-trees and other specialized methods to do lookups.  

For more info, google it :)

<br>
##BONUS CHALLENGE 1
<br>
Check this out:  

```
# rails g model beanpastry bean:belongs_to pastry:belongs_to  #We did this already
rails g model applePear bean:belongs_to pastry:belongs_to  
rails g model banana_orange bean:belongs_to pastry:belongs_to  
rails g model cranberries_pineapples bean:belongs_to pastry:belongs_to  
rake db:migrate  
```

|rails g model | schema/db tablename | modelname | controllername  |  has_many name |  
|--------------|-----------|-----------|-----------------|----------------|  
|beanpastry    |beanpastries | Beanpastry | beanpastries | beanpastries |  
|applePear  |  |  |  |  |  
|banana_pineapple  |  |  |  |  |  
|cranberries_pineapples  |  |  |  |  |

These rails generate commands create different join tables, but all can work to join  
beans and pastries.  
<br>
Run all the generate commands, and the migrate.  
<br>
Then see if you can change the code to use applePear, banana_pineapple, and cranberries_pineapples to actually work.  

###It doesn't matter what we call the join table, but the convention is to either call it:

* The names of the two tables it joins, in alphabetical order (Like Applezebra)
* Description of the relationship. For example:
	* A student has many classes and class has many students. 
	* Another way to say this: 
	Student can be enrolled in many classes and a class can have many students enrolled).
	* In this case we could call the join table "Enrollments" instead of Classesstudents.

	** IMPORTANT NOTE: Never call a table Class - it's a reserved word. Use Klass or Course instead.**
	

<br>
##YOU WANT MORE!? CHALLENGE 2  
<br>
Add SHOW LIGHT / SHOW DARK / SHOW ALL / SHOW INSTOCK functionality from RAILSCAFE in the custom parameters class.  

Now add another button, GOOD WITH CROISSANTS, and add a filter that only includes beans that are recommended with croissants.  
<br>

## OTHER TIPS
You can recreate a table with a different structure by generating a blank migration with  
```rails g migration ReplaceTableStructure (or whatever you want to call it)```  
and then copying the previous migration that created the table, and editing it.  
If it has the force option, it will drop any table with the same name before creating it anew  - no ```rake db:drop sometable``` required.  
<br>
<br>
The easiest way to work with join tables is to  
1.  name them with no or only one uppercase letter  
2.  use both parent table names without an underscore  
3.  refer to the join table in the your associations  

<br>
  
There is a special migration for creating join tables.  It doesn't do enough to be worth the effort and can be tricky to get exactly right.  
<br>
Take a look at your database via the command line or using a database GUI like SQLite Browser or PGADMIN and see what you've created after doing migrations.  
<br>
Do not generate your join table with the fields mytableAAA_id and myTableBBB_id: rails will add another suffix of _id giving you mytableAAA_id_id and mytableBBB.  
<br>
There is an association: has_and_belongs_to_many .  It's not worth using.  Firstly it relies on using the conventions exactly right.  Secondly as the rails guide says:  
**"You should use has_many :through if you need validations, callbacks, or extra attributes on the join model."
**


