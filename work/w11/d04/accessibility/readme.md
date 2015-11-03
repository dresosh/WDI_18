#Accessibility

> The power of the Web is in its universality.
Access by everyone regardless of disability is an essential aspect ~ "Tim Berners-Lee"

As a **blind user**, when I **hit your website** I want to **have access to all the content** so that I can **be like everybody else**

----

Millions of people have disabilities that affect their use of the Web. Currently most Web sites and Web software have accessibility barriers that make it difficult or impossible for many people with disabilities to use the Web. As more accessible Web sites and software become available, people with disabilities are able to use and contribute to the Web more effectively

"Web accessibility refers to the inclusive practice of removing barriers that prevent interaction with, or access to websites, by people with disabilities. When sites are correctly designed, developed and edited, all users have equal access to information and functionality" ~ wiki

For certain organizations, accessibility of their product might be required by law. For others, it is a core part of their business. 

It is important to consider accessibility from the inception of your project. 

Considering accessibility will always improve your design (Simplicity)


##Categories (from wikipedia)

The needs that Web accessibility aims to address include:

* **Visual**: Visual impairments including **blindness**, various common types of **low vision** and **poor eyesight**, various types of **color blindness**;
* **Motor/mobility**: e.g. difficulty or inability to use the hands, including tremors, muscle slowness, loss of fine muscle control, etc., due to conditions such as Parkinson's Disease, muscular dystrophy, cerebral palsy, stroke;
* **Auditory**: Deafness or hearing impairments, including individuals who are hard of hearing;
* **Seizures**: Photo epileptic seizures caused by visual strobe or flashing effects.
* **Cognitive/Intellectual**: Developmental disabilities, learning disabilities (dyslexia, dyscalculia, etc.), and cognitive disabilities of various origins, affecting memory, attention, developmental "maturity," problem-solving and logic skills, etc.

##Screen Readers

####Mobile (iOS) (Android may vary):

iOs voice over: Settings>General>Accessibility>Voice over

TASK > Plug in your headphones and spend 5 minutes learning how to use the screenreader on your mobile device. Then use it to send a text message to one of your classmates.


####Desktop (MAC)

OSX voice over (command + F5)

##### The first time you launch it you will be prompted to take the tutorial. 

TASK > Plug in your headphones and spend 10 minutes learning how to use the screenreader on your laptop. Try navigating to a web page and having the screen reader read it out loud. 

There are browser specific extensions that will read the content of the web browser for you:

* [firefox](https://addons.mozilla.org/en-us/firefox/addon/fangs-screen-reader-emulator/)
* [chrome](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)


##Examples of accessibility improvements


####[Alt tags](http://www.w3schools.com/tags/att_img_alt.asp) for images

Using alt tags will allow screen readers to provide information to the user about the content of the image:

* [http://webaim.org/techniques/alttext/](http://webaim.org/techniques/alttext/)

* [http://www.phase2technology.com/blog/no-more-excuses-the-definitive-guide-to-the-alt-text-field/](http://www.phase2technology.com/blog/no-more-excuses-the-definitive-guide-to-the-alt-text-field/)

TASK >  Take a couple minutes to read the above two articles and then using this information, try to add some **descriptive** alt tags to some images in a blank HTML document. Then test your HTML document, using your screenreader. 


##Other resources

####Keyboard input
Some people cannot use a mouse, including many users with limited fine motor control. An accessible website does not rely on the mouse; it provides all functionality via a keyboard as an alternative. 

####[Audio Transcription](https://chrome.google.com/webstore/detail/transcribe-transcribe-aud/ogokenmicnjdfhmhocanoemnddmpcjjm?hl=en-US) 

The opposite of screen readers.... 

####Accessibility in Rails

[capybara-accessible](http://blog.pivotal.io/labs/labs/automated-accessibility-testing-rails)

[raakt](http://www.standards-schmandards.com/projects/raakt/)

####Accessibility in Angular: [ng-Aria](https://docs.angularjs.org/api/ngAria) 
The ngAria module (is an AngularJS module, that) provides support for common ARIA attributes that convey state or semantic information about the application for users of assistive technologies, such as screen readers.

For ngAria to do its magic, simply include the module as a dependency. The directives supported by ngAria are: ngModel, ngDisabled, ngShow, ngHide, ngClick, ngDblClick, and ngMessages.

Bonus Challenge add-on TASK (for those very interested in accessibility) 
Recreate the above HTML document for the last task, using angular. Use ng-Aria to modify your tags so that the screen reader still has access to them within angular. 





