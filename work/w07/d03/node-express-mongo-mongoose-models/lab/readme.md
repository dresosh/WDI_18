# Mongoose Creation, Updates, & Queries Lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

We've seen how to use MongoDB in a Node environment, so now, let's practice Mongo, Node and Mongoose in this lab. Imagine you work for a pet shelter, and you've been asked to create an MVP for a user interface that will allow you to keep track of adoptions, abandonments, and drop-offs.  You'll have to build a small web application that will allow a user to manipulate records through links and a form.


## Exercise

#### Requirements

- The application will represent an animal shelter and the user will have options to:
  - Adopt a pet
  - Abandon a pet
  - Leave a new pet in the shelter
- The root will show the list of animals
- Create a model Animal with these fields:
  - name(String)
  - breed(String)
  - dob(Date)
  - gender(String)
  - family(String)
  - status(String)

**Bonus:**

- Add validations with Mongoose

#### Starter code

In the [starter code](starter-code) folder, you'll find a Node js app containing all the packages you need; run `npm install` to set the packages and create a mongo database named `animalshelter`. Then, run the app!

## Additional Resources


- [Express JS documentation](http://expressjs.com/api.html)
- [MongooseJS documentation](http://mongoosejs.com/docs/api.html)
