jquery.asyncHTML
================

jQuery Plugin utilizing iFrames to load content asynchronously.

Currently only supports webkit-based browsers (e.g. Chrome, Safari), although using https://github.com/jugglinmike/srcdoc-polyfill might extend compatibility

Description
-----------

This plugin loads content inside of an iframe and copies the iframe's content into the specified html element. In doing so, everything (including document.write reliant scripts) is loaded asynchronously, lowering the overall page load time.

Please note: This plugin does not increase the performance of javascript but allows the browser to continue rendering, while it is waiting for a slow javascript (which may contain document.write and thus cannot be loaded using the native async=true approach of SCRIPT-tags).

Warning: Since embedded content will be downloaded and rendered twice by most browsers, you may encounter tracking differences when tracking-pixels are used.

Usage
-----

```javascript
jQuery("#mysupercooldiv").asyncHTML("<!-- Some super slow html goes here -->");
``` 

This will cause the "Some super slow html goes here" comment being rendered in a hidden iframe and afterwards being copied to the #mysupercooldiv element.

It's also possible to load an external javascript file:

```javascript
jQuery("#mysupercooldiv").asyncJS("http://abc.xyz/foo.js");
``` 

You can even call a function directly:

```javascript
jQuery("#mysupercooldiv").asyncJS(function() {
    document.write("<scr" + "ipt src='http://slow.xyz/slow.js'><\/scr"+"ipt>");
});
``` 

Please note: All Javascript is executed in an iframe's context. You might not have access to libraries or DOM elements of the parent document.
