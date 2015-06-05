# inotive-express-boilerplate
This repo is a starting point for those who are interested in nodejs and [express](http://expressjs.com/) framework.
It uses [Gulp](http://gulpjs.com/) as workflow control (todo less compile, js concat, copy fonts and images).


## Workflow
Here is the build in workflow in this project:

- Copy Fonts
- Copy & compress Images
- Compile Less to Css
- Concatenating Js + plugins
- Live reloading + browser sync
- Auto restart node when changes

*Note*: to change or add new workflow, check out the `gulpfile.js`.


## Framework used
- Express
- Bootstrap + bootswatch-paper-theme
- Jade templating engine


## How to start

1. Clone this repo
2. Cd into the root folder of this repo
3. run `npm install`. **note: make sure you have nodejs install**
4. run `bower install`
5. run `gulp`
6. open browser and navigate to `localhost:3000`. * **note** *: livereload at port `3000` and actual server port is at `3000`. to change checkout the `config.js`.
