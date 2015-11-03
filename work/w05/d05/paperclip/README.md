# Uploading images with paperclip!

###SWBAT
*Explain why we use 'paperclip'<br>
*Use paperclip to upload images for a model

##What is paperclip?
"For some reason, file attachment is annoying. I don’t know why, and I know a lot of people have attempted to solve the problem in the past, myself included. Yet it still is. Having gotten fed up with gotchas and design decisions that we didn’t agree with, I went and wrote Paperclip on the plane to RailsConf last year. We’ve been using it here in various forms since and IMHO it’s the way to handle uploads, and finally decided that it should be released." -- John Yurek, Thoughbot, March 2008 

With paperclip, a file is treated like any other attribute. It’s assigned like any other attribute. You can say what thumbnails are made, and what resolution and format they are, and where they should be stored.

So why use paperclip? <strong>It makes uploading files (e.g. images) very simple.</strong>

## It's a RAILS SPEED ROUND!
Pair program a simple rails app. 
The requirements are as follows:<br>
*1)There is a Post model with title (string) and body (text) as attributes<br>
*2)There is a posts controller with index, new, and create actions that work<br>
*3)There is an index page that displays all the posts<br>
*4)There is a new page that let's you create a new post<br>
*5)There is a navbar on every page that let's you navigate between the index page and the new page. <br>
*6)There is a routes file (you can use the resources function if you want)<br>


## Let's add images to the posts!

###Step 1 - load up Paperclip
Add paperclip to our list of gems, then load it into our app with a ```bundle```

```
# Gemfile
gem 'paperclip'
```

```bash
$ bundle
```


###Step 2 - let our database know what it will be storing

Right now our database is only storing the title and body attributes of each post. We should run a migration to add some image properties to the DB. <br><br>
Let's make an empty migration, then we can add stuff to it, and once we're done we can run ```rake db:migrate```

```bash
$ rails g migration AddPaperclipToPost
```

```
# db/migrate/20150603054166234_add_paperclip_to_post.rb
class AddPaperclipToPost < ActiveRecord::Migration
  def change
  	add_attachment :posts, :image  
  end
end
```

```add_attachment``` is a special Paperclip method that says we want to change the posts table so that we can add an attachment to each post (which we are calling 'image'). Run this migration, then take a look at our schema.

```bash
$ rake db:migrate
```

Check out those schema!

```
# db/schema.rb
ActiveRecord::Schema.define(version: 20150602054116) do

  create_table "posts", force: :cascade do |t|
    t.string   "title"
    t.string   "body"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"	<-- look what got added
    t.string   "image_content_type" <-- look what got added!
    t.integer  "image_file_size"	<-- look what got added!
    t.datetime "image_updated_at"	<-- look what got added!
  end

end
```

###Step 3 - Tell our model that its objects have attached files
In our Post model let's tell it that posts will have an attached file (called image). When we want to refer to that file, we might want the small version, the med version, or the large version. We can define that here too. 
```
# models/post.rb
class Post < ActiveRecord::Base
	has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
end
```
[http://www.rubydoc.info/gems/paperclip/Paperclip/ClassMethods]


<br>
While we're here, let's also do something else. The new version of Paperclip is secure by default. You have to specify which file types you are going to allow to be uploaded. This is to prevent 'content type spoofing', e.g. uploading a php file instead of an image which will then become publicly accessible. 

WHich file types shall we allow? jpgs, pngs, gifs seem ok. 

```
# models/post.rb
class Post < ActiveRecord::Base
	has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
```
[https://github.com/thoughtbot/paperclip#security-validations]


Speaking of security, there's one more thing we need to do - let the image part of the params through for when we want to save an image!

```
# controllers/posts_controller.rb
  private
  def post_params
  	params.require(:post).permit(:title, :body, :image)
  	
  end
```

###Step 4 - Fiddle with the view templates

Now we need to make sure the form for a new post allows us to upload a file:

```
#views/posts/new.html.erb
<h1>Make a new post!</h1>

<%= form_for @post do |f| %>
	<%= f.label :title %>
	<%= f.text_field :title %>
	<br><br>
	<%= f.label :body %>
	<%= f.text_area :body%>
	<br><br>
	<%= f.label :image %>
	<%= f.file_field :image%>
	<br><br>
	<%= f.submit %>

<% end %>
```

...and that we can see the image in the index page:

```
#views/posts/index.html.erb
<h1>This page lists all posts</h1>
<hr>
<% @posts.each do |post| %>
	<%= post.title %><br>
	<%= post.body %><br>
	<%= image_tag post.image.url(:large) %><br><hr>
<% end %>
```

##Now you do it! (10 mins)
*Make sure you have a copy of this to play with: https://github.com/ga-students/WDI_LA_16/tree/master/06-week/blog_authentication/blog_with_authentication-COMPLETE
*Add image upload to the User model
*Show a thumbnail of the image next to each post on the index page
*Pat yourself on the back


#BONUS ROUND
##Store your images in S3

###Step 1 - Create the S3 Bucket where you will store your images

+ Log in to the [Amazon S3 Management Console](https://console.aws.amazon.com/s3/home)

+ Click on Create Bucket and give it a name, in the region of your choice. (Usually, a closer region to your userbase is the best choice.) Click on Create.

##Identity and Access Management (IAM)

+ Click on your name in the upper right bar, then click on [Security Credentials](https://console.aws.amazon.com/iam/home). As Amazon says, "The account credentials provide unlimited access to your AWS resources." So, make sure you safeguard these keys.

+ **Use AWS Identity Management.** In the security popup, it recommends you create users. Click on the IAM Users button. Create a new user. 

+ **Record the user's credentials.** You must not lose the Secret Access Key -- you will not be able to retrieve this later.

+ **Create a Group.** Now, click on Create Group. After naming your group, select the Amazon S3 Full Access policy template. Click Next Step, then Create Group.

+ **Add User to Group.** Click on Users in the left sidebar. Now, click on your new user. In the User summary page, click the button Add User to Groups. Select the group you just created then add the user to that group.

+ **Consider Additional Steps.** Click on your Dashboard -- the uppermost link in the left sidebar. The Security Status section lists additional steps you can take to safeguard your account.



###Step 2 - Use figaro to hide your amazon keys

```
# Gemfile
gem 'figaro'
```

```bash
$ bundle
```

```bash
$ figaro install
```

Then add your S3 keys in the newly generate application.yaml file

```
# config/application.yaml
AWS_ACCESS_KEY_ID: <access key ID here, as a string>
AWS_SECRET_ACCESS_KEY: <secret access key here, as a string>
```

###Step 3 - Configure Paperclip to work with S3

Load up the gem that let's us use Paperclip with S3 easily ```gem 'aws-sdk'```<br>
If you've got this far you don't need me to tell you that you will have to do a ```bundle```

Now we need to set up our paperclip configuration:
```
# config/environments/development.rb
config.paperclip_defaults = {
  :storage => :s3,
  :s3_credentials => {
    :bucket => 'S3_BUCKET_NAME'
  }
}

[where is says 'S3_BUCKET_NAME', you should put your bucket's name]
```

```
# config/environments/production.rb
config.paperclip_defaults = {
  :storage => :s3,
  :s3_credentials => {
    :bucket => 'S3_BUCKET_NAME'
  }
}

[where is says 'S3_BUCKET_NAME', you should put your bucket's name]
```

##POSSIBLE ERRORS!
1) You might get told that Paperclip is an uninitialized constant. If that's the case, try loading up the aws-sdk gem with a version that is below version 2.0. 
```
gem 'aws-sdk', '<2.0'
```

<br><br>
2) If your images are being loaded into S3 but not retrieved, try making a new file inside config/initializers called paperclip.rb.<br>
Inside, put this:

```
Paperclip::Attachment.default_options[:url] = ":s3_domain_url"
Paperclip::Attachment.default_options[:path] = "/:class/:attachment/:id_partition/:style/:filename"

```




