# inotive-express-boilerplate
This repo is a starting point for those who are interested in nodejs and [express](http://expressjs.com/) framework.
It uses [Gulp](http://gulpjs.com/) as workflow control (todo less compile, js concat, copy fonts and images).


## Workflow
Here is the build in workflow in this project:

- Copy custom fonts
- Copy & compress images
- Compile Less to css
- Concatenating Js + plugins
- Live reloading + browser sync
- Auto restart node when changes

*note: to change or add new workflow, check out the `gulpfile.js`.*

## Framework used
- Express
- Bootstrap + bootswatch-paper-theme
- Jade templating engine
- jQuery


## How to start

1. Clone this repo
2. Cd into the root folder of this repo
3. run `npm install`. *note: make sure you have nodejs install*
4. run `npm install -g nodemon gulp browser-sync`.
5. run `bower install`
6. run `gulp`
7. open browser and navigate to `localhost:3000`. *note: livereload at port `3000` and actual server port is at `3000`. to change checkout the `config.js`.*

## To Do
- adding database binding (either mongodb or rethinkdb)
- adding basic CRUD sample
- adding form-validation


## License

(The MIT License)

Copyright (c) 2013 Toni Lim <tonilim85@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
