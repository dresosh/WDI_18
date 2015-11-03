# Polymer

#### Objectives:
##### SWBAT

- Leverage the power of Web Components
- Import HTML Templates
- Understand the DOM Module
- Use WC Data Binding


### Reserach: What are the 4 major pieces of web components ( 15 minutes )

#### 10 min of searching

#### 5 Min of chat
- Custom Elements
- HTML Imports
- Templates
- Shadow DOM


#### What are the libraries that are used?

### Research: Why is declarative better?



### We Do - Code Along ( 20 min )
Go to the starter code, which is just the shell for what we're about to build.

Run the usual:

`$ npm i` 
`$ bower install`

Run an `$ http-server` in the `/starter~~~~-code` directory in an extra tab and just leave it running

So here we have some elements... lets fill em in

```html
<ga-nav>
  <ga-button route="images" active>Image</ga-button>
  <ga-button route="noteCards">Note Cards</ga-button>
</ga-nav>
<ga-page view="images" class="hidden">
  <img src="https://farm4.staticflickr.com/3751/10106979505_e08ac12189_o.jpg" />
</ga-page>
<ga-page view="noteCards" class="hidden">
  <ga-note-card title="Note Card Title">
    This is the notecard
  </ga-note-card>
</ga-page>
```


### We Do: Now we're going to build a button ( 10 min )
```html
<dom-module id="ga-button" attributes="route active">
  <link rel="import" type="css" href="ga-button.css" />
  <template>
    <content></content>
  </template>
  <script src="ga-button.js"></script>
</dom-module>
```
And the related JS...

```javascript
// element registration
Polymer( {
  is: "ga-button",
  properties: {
    active: {
      type: Boolean
    }
  }
})
```
The CSS

```css
:host{
  flex-grow:1;
  min-height:30px;
  width:50%;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  border:thin solid white;
  background: darkRed;
  color:white;
  padding: 4px;
}
```


### You Do: Go find a WC button you like ( 5 min )

**3 minutes**... Find a WC button you like

**2 Minutes**... Turn and share. Why?

### We Do: Codealong - Wire up the Nav ( 10 min )
```html
<dom-module id="ga-nav">
 <link rel="import" type="css" href="ga-nav.css" />
  <template>
    <content></content>
  </template>
  <script src="ga-nav.js"></script>
</dom-module>
```
And the related JS

```javascript
// element registration
Polymer( { is: "ga-nav",
  ready: function () {
    var self = this
    Array.from( self.querySelectorAll( "ga-button" ) ).forEach( ( elem ) => {
      elem.addEventListener( "click", ( event ) => {
        this.changeView( elem.getAttribute( "route" ) )
      })
    })
  },
  changeView: function ( newView ) {
    Array.from( document.querySelectorAll( "ga-page" ) ).forEach( function ( elem ) {
      elem.classList.add( "hidden" )
    })
    document.querySelector( "ga-page[view='" + newView + "']" ).classList.remove( "hidden" )
  }
} )
```
Some CSS to go with that:

```css
:host{
  width:100%;
  display:flex;
}
```

### You Do: Go find a WC Navigation you like ( 5 min )

**3 minutes**... Find a WC button you like

**2 Minutes**... Turn and share. Why?


### We Do - Wire up the pages ( 15 min )
```html
<dom-module id="ga-page" attributes="view">
 <link rel="import" type="css" href="ga-page.css" />
  <template>
    <content></content>
  </template>
  <script src="ga-page.js"></script>
</dom-module>
```
And the related JS

```javascript
// element registration
Polymer({
  is:"ga-page",
  ready: function () {
    var route = document.querySelector( "ga-button[active]" ).getAttribute( "route" )
    if ( this.getAttribute( "view" ) === route ) {
      this.classList.remove( "hidden" )
    } else {
       this.classList.add( "hidden" )
    }
  }
})
```
The related CSS

```css

```

### You Do: Go find a WC Navigation you like ( 5 min )

**3 minutes**... Find a WC button you like

**2 Minutes**... Turn and share. Why?

### We Do - Wire up the notes ( 15 min )
```html
<dom-module id="ga-note-card" attributes="title">
 <link rel="import" type="css" href="ga-note-card.css" />
  <template>
    <h3>{{title}}</h3>
    <div>
      <content></content>
    </div>
  </template>
  <script src="ga-note-card.js"></script>
</dom-module>
```
And the related JS

```javascript
Polymer({
  is: "ga-note-card"
})
```
And some CSS

```css
:host{
  width: 98%;
  border: thin solid black;
  border-radius: 0 0 6px 0;
  background: lightBlue;
  box-shadow: 0 1px 1px 1px rgba( 0, 0, 0, .5);
  display:block;
  margin: 4px auto;
}

:host:hover{
  box-shadow: 1px 2px 2px 1px rgba( 0, 100, 200, .5);
}

:host h3{
  margin: 0;
  padding: 0;
}
```

### You Do: Go find a WC Note Card you like ( 5 min )

**3 minutes**... Find a WC button you like

**2 Minutes**... Turn and share. Why?


### We Do - Wire up the notes ( 15 min )
```html
<dom-module id="ga-note-card" attributes="title">
 <link rel="import" type="css" href="ga-note-card.css" />
  <template>
    <h3>{{title}}</h3>
    <div>
      <content></content>
    </div>
  </template>
  <script src="ga-note-card.js"></script>
</dom-module>
```
And the related JS

```javascript
Polymer( { is: "ga-note-card" } )
```
And some CSS

```css
:host{
  width: 98%;
  border: thin solid black;
  border-radius: 0 0 6px 0;
  background: lightBlue;
  box-shadow: 0 1px 1px 1px rgba( 0, 0, 0, .5);
  display:block;
  margin: 4px auto;
}

:host:hover{
  box-shadow: 1px 2px 2px 1px rgba( 0, 100, 200, .5);
}

:host h3{
  margin: 0;
  padding: 0;
}
```

## Paper Elements

### Intro ( 15 min )

Lets find some paper elements and put them together... our objective.
- Nav Bar
- Map
- Material Design


### You Do - Find your favorites ( 60 min )

Build a small Todo list application with Web Components using Polymer#^1.1.5 & Paper Elements.
