# Connecting Express Routes to Mongo Lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

We’ve spent a lot of time this week writing apps with Node and Express from scratch, so let's get some more [reps](http://www.livestrong.com/article/153380-definition-of-reps-sets/) and build out an app that includes all of what we've learned. Remember, practice will make you better; this is why we’re having you repeat these steps, over and over again.

For this lab, we want you to get creative: create your own API with RESTful resources and connect your API to Mongo. In the solution code provided, we've used the `Candy` resource from Tuesday's *Bulding Express Routes Lab* as inspiration, but remember, you'll be building something with a different theme. *Kitties*, *puppies*, *car parts* - **you name it!** The world is your oyster so have fun and pick a theme you'll have fun with!

You're going to use Mongoose to create a schema for your model, as you've already done - again, think back to the Animals app. As a **bonus challenge**, we want you to try and to create a schema that incorporates embedded and/or referenced documents.

## Exercise

#### Requirements

- Create an entire RESTful resource in Express - GET/POST/PUT/DELETE - and use Mongoose-backed models and `body-parser` to create, edit, & destroy documents
  - Once you have your server running, create your first API endpoint - it should be a POST
  - The POST should be able to handle a success or a failure of the POST
  - Connect that endpoint with your model and hit the POST endpoint using cURL or Postman to create a new piece of data
  - Next, Create a GET endpoint. Hit the GET endpoint using cURL or Postman to create a new piece of data - you should see the data that you just POSTed
  - Repeat these steps for PUT and DELETE
  - Deploy the app
  - We just went over this in class today so refer to your notes, Google to your heart's content, or ask a buddy for the steps involved to push your app live. If all else fails and you get super stuck, ask an instructor for assistance.

#### Deliverable

An example app can be found in `solution-code`.  Use this as inspiration!

## Additional Resources

- [What is a "Rep"?](http://www.livestrong.com/article/153380-definition-of-reps-sets/)
- [Use EJS to Template Your Node Application](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
