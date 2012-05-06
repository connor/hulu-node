hulu-node
=========

A node.js wrapper for the Hulu search API

## How to use it

```js

var hulu = require("hulu-node");

hulu.search("Saturday Night Live", function(response) {

  // do whatever you want with the response.
  // the response is in JSON

});

```
