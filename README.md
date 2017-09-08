# Sweet Links
A little jQuery plugin that can add some cool attributes and features to anchor tags on your website.

## What does Sweet Links do?
A few things! Sweet Links can be applied to any or all <em>anchor</em> tags on your website. It will check the properties of the tag, and then execute the following functions:

* The script will check if the href points to a downloadable file format, and if so, it will add a class that can be used for styling as well as the download attribute if it doesn't already exist.
* The script will check if the href points to an anchor on the same page, and if so, smooth scroll to that anchor. The speed of this animation and the position that the user is taken to can be configured to suit your requirements. A class is also applied which can be used for styling.
* The script will check if there is a title attribute present on the anchor tag, and if not, it will add it using the text content of the link.
* The script will check if the href points to an external destination. If so, it will add a class that can be used for styling, the rel="external" attribute will be added, and if desired - an optional target="_blank" (disabled by default) will be added.


## Documentation
Check the index.html file or [sweetlinks.davidfox.ie](http://sweetlinks.davidfox.ie) for examples and documentation.