# Trickle

A simple way to present elements incrementally.

### What Does It Do?

I takes a set of HTMLelements, and iteratively displays them in the order which
they naturally appear in the DOM.

### What Flavors Does It Come In?

Simple! All you need to do is identify a series of elements via a selector. The
Trickle will find those elements' and work it's magic from there.

Advanced! Tricke also allows you to add elements to an existing set, or create
a new set of elements - either in a batch or incrementally - from an exterior
data source.


on [freenode.net](http://freenode.net).

## Development

### Requires

* jQuery's [jquery-wp-content](https://github.com/jquery/jquery-wp-content/)
* Web server (such as Apache)
* PHP
* MySQL
* WordPress
* node
* git

### Installation

#### web-base-template

1. Follow the installation steps for [jquery-wp-content](https://github.com/jquery/jquery-wp-content/).

#### Install node >=0.6.4

1. Follow https://github.com/joyent/node/wiki/Installation

You can also install [nave](https://github.com/isaacs/nave), a node version manager.
You can easily install it using [nave-installer](https://github.com/danheberden/nave-installer)
or download it manually.

#### plugins.jquery.com setup

To build and deploy your changes for previewing in a
[`jquery-wp-content`](https://github.com/jquery/jquery-wp-content) instance,
follow the [workflow instructions](http://contribute.jquery.org/web-sites/#workflow)
from our documentation on
[contributing to jQuery Foundation web sites](http://contribute.jquery.org/web-sites/).

If you want to setup and ultimately run the node scripts that manage plugin
entries, run `grunt setup`. If you need to clear the db or are getting and error
running `grunt setup` regarding the setupdb or retrydb tasks failing,
run `grunt clean-all`.

If you have made changes to the documentation and simply want to deploy or update
that content, run `grunt update`.

#### Running the site for development and debugging

1. `node scripts/update-server.js --console` will start the update server and
log its output to the terminal window. This will *not* update wordpress, but
will let you see the result of adding a plugin locally.

2. `node scripts/wordpress-update.js --console` will process the changes in
sqlite into entries in wordpress. Note, if you're re-adding plugins that have
already been added, you will need to remove those entries from wordpress.

### Running the site normally

`node scripts/manager.js` runs the update-server and wordpress-update scripts
automatically. However, because it handless restarts/failures of these scripts,
it is harder to stop this process. Also, running the servers manually and
individually is much easier for development, as you will probably only *need*
update-server.js running.

### Transferring ownership of a plugin

On occassion, a plugin will be transferred from one owner to another. When this
happens, you will need to verify that the transfer is legitimate. The request
should come from the original owner, but in rare circumstances the request may
come from the new owner and the original owner may not be reachable.

To transfer a plugin, log into the production server and run the `bin/transfer.js`
script. The script will prompt you for the necessary information and has several
checks to ensure that the data provided isn't junk.
