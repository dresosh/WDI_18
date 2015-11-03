# Hashtaggery

------

Monkey patch the String prototype to include a method named `hashtags()`. This method should return an array of all words that are preceded with an octothorpe (a.k.a. hashtag). Before you ask, yes, the words in the array need to be preceded by an octothorpe.

#### EXAMPLES

Character case sensitivity is not important.

``` javascript
'this #word is #hashtagged'.hashtags()
// => ['#word', '#hashtagged']
```

A string with words with underscores can still be considered a hashtag.

``` javascript
'this #word_is hashtagged'.hashtags()
// => ['#word_is']
```

A single hashtag should not be considered a hashtagged word.

``` javascript
'# this #word is hashtagged'.hashtags()
// => ['#word']
```

