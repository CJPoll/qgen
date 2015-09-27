# Readme for Quick-Character Generator (qgen)

## Dependencies

1. Ruby 2.1.3+. Earlier versions may or may not work.
1. npm 2
1. webpack (latest version)
1. Postgres Database (latest version)

On mac, you can install the correct version of ruby using [RVM](http://rvm.io),
[rbenv](http://github.com/sstephenson/rbenv), or another ruby manager of your
choice. On windows, you're on your own. If you're on Linux, you already know how
to install software on your distro.

For installing npm, I recommend using [NVM](https://github.com/creationix/nvm).

Once you have npm installed, you'll need to install webpack globally on your
computer (`npm install -g webpack`).

Lastly, you'll need to install the PostgreSQL database. On Mac, install
[homebrew](http://brew.sh/), then run (`brew install postgres`). On Windows, you
can download the installer binary from
[Postgres' site](http://www.postgresql.org/download/).

## Setup

Once you have all dependencies, you should run `bundle install && npm install`
from your shell. That will install all the required ruby gems and node packages
required for the app.

After that's all said and done, rune `rake db:setup` to get your database all
ready to go.

## Local Testing

Once you have everything ready, simply go to the application directory in your
terminal and run `rails server`. You can then view the website in your browser
at the URL: `localhost:3000`.

# Contributing

If you found a bug or have a feature request, simply open a new
[github issue](https://github.com/CJPoll/qgen/issues). If you want to make a
pull request, go right ahead and fork the repo, do your work on a separate
branch, and open up a pull request.

## Tech Stack

This application uses Ruby on Rails for the backend, and views are made using
[ReactJS](https://facebook.github.io/react/).

Some parts of the site are their own Single-Page Apps, using
[react-router](https://github.com/rackt/react-router) to handle browser history
and page routing.

[RefluxJS](https://github.com/reflux/refluxjs) is used to power the model behind
the React views.
