# Modeling Relationships Lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

General Assembly is opening a paperback library - yes, it's true (not really). Let's create another Rails app from scratch (WDI is about repetition) that will allow our librarian to easily keep inventory of our books.  This app will keep record and show our books, the authors, and book categories as well as the relationships that exist between each.

## Exercise

#### Requirements

- Create a rails app
- Create:
	- An `Author` model with these attributes:
		- Firstname (String)
		- Lastname (String)
		- Dob (Date)
- A model `Book` with these attributes:
    - Title (String)
    - Summary (Text)
- A model `Category` with these attributes:
    Name (String)
- Associations
  - An Author has many books
  - An Author has many categories through books
  - A Book Belongs to an Author
  - A Book has many categories
  - A Category has many books
  - A Category has many Authors through books