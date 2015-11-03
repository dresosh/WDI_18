# 9.2 - Responsive CSS

## Objectives - SWBAT:
- Describe media queries and how to write them
- Create rules that adjust styles for phones, tablets, and computers

<br />

### Fluid Design
Fluid websites are built using percentages for widths. As a result, columns are relative to one another and the browser allowing it to scale up and down fluidly.

> - (10 min) Lets practice: open the class repository *( this should be bookmarked by now )* go to: **w02/d04/responsive\_css/exercise\_1/** <br />
> - Change this example to use percents and give it some margins and padding m

### Adaptive Design
Adaptive websites introduce **media queries** to target specific device sizes, like smaller monitors, tablets, and mobile.


### Responsive Design
Responsive websites are built on a fluid grid and use media queries to control the design and its content as it scales down or up with the browser or device.


## Media Queries
What they used to look like

```css

@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
```

What they look like now:

```css
@media (min-width: 700px), handheld and (orientation: landscape) { ... }
@media screen and (min-aspect-ratio: 1/1) { ... }
@media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10) { ... }
```
###### (p.s. "handheld" doesn't work with all handheld devices)
or:

```css

/* ----------- Non-Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) { 
	.body{
		margin: 0 auto;
	}
	.facet_sidebar {
   		display: block;
	}
}

/* ----------- Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px)  and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) { 
	.body{
		margin: 10px auto;
		font-size:2rem;
	}
	.facet_sidebar {
   		display: flex;
	}
}
```


####*"If you think responsive's simple, I feel bad for you son. We got 99 viewports, but the iPhone's just one." —Josh Brewer, March 10, 2010*

You should probably read this... it's great:
[MDN on media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)<br />


#### What is a breakopint? (CSS)

```css
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 5 and 5S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) { 

}

/* ----------- iPhone 6+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 

}
```

A place where the screen is to small in it's current orientation, pixel density, or zoom, and the content needs to be reorganzied to fit cleanly in the viewport


#### [Common Breakpoints](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

> ( 10 min ) Lets go back to our exercise: **w02/d04/responsive_css/exercise_1/** <br />
> Make it this time, not only fluid but responsive to breakpoints.


## Device Detection

Why is device detetion important?

- Delivering desktop assets to a mobile phone is rediculous and a waste of bandwidth.
- Devices "View Port" (which is the information sent by the browser or 'psuedo browser' on the device) doesn't always match the device pixel density or screen resolution

- This is most effective when done on the server-side. However if you cannot or dont' have access to breaking down styles into good proportions to your media queries, please use a little JS to dynamically load CSS style sheets only when needed, and host them on a different CDN somewhere if you have to: ['Media Match'](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

```javascript
if (window.matchMedia("(min-width: 400px)").matches) {
  /* the viewport is at least 400 pixels wide */
} else {
  /* the viewport is less than 400 pixels wide */
}
```


## Conclusion

Here are my thoughts echoed by google developer, Pete LePage:

- Create breakpoints based on content, never on specific devices, products, or brands
- Design for the smallest mobile device first, then progressively enhance the experience as more screen real estate becomes available.
Keep lines of text to a maximum of around 70 or 80 characters

Also another great article: [7 habits of highly effective media queries](http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/)

## Mini-Lab (45 min)

Instructions: Use everything we've talked about and practiced by making an about me page. (You can use one of your other 'about me' pages)
Must have:

- An image of yourself
	- It must become different sizes based on viewport
	- Also needs to be centered at the top
- 3 Paragraphs
	- You can make them 2 truths and a lie if you like
- 2 break points
- Fluid between break points

Bonus: If you complete this, show me I'll give you bonus work.