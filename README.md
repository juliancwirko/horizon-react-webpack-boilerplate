## Horizon, React, Webpack boilerplate

Demo app is included.

### What you get here:

1. [Horizon](http://horizon.io/) / [RethinkDB](https://www.rethinkdb.com/) app
2. [React Horizon](https://medium.com/@roman01la/introducing-react-horizon-4c26f9ef628c)
3. [React](https://facebook.github.io/react/) / [Webpack](https://webpack.github.io/) complete workflow
4. Tests configuration

### How to start:

1. You need Node 4.4 or higher
2. Install RethinkDB here's how: [http://rethinkdb.com/docs/install/](http://rethinkdb.com/docs/install/)
3. Install Horizon from Npm: `npm install -g horizon`(we use Horizon 2 here)
4. Git clone this repo
5. Go to the project folder: `cd horizon-react-webpack-boilerplate`
6. Install all Npm dependencies: `npm install`
7. Run Horizon server: `hz serve --dev`
8. In the second terminal tab run Webpack server: `npm start`

### What else you can do here:

1. You can run ESLint tests: `npm run lint`
2. You can run tests: `npm run testonly`
3. You can run tests and linter: `npm test`
4. You can build your project for production, `dist` folder: `npm run build`

### Testing

We use configuration with Mocha, Enzyme, JSDOM, Chai, Sinon etc. You can even test CSS Modules. Check out the example file in `__tests__` folder.

### Front-end stuff

1. We use Stylus and [sGrid](http://stylusgrid.com)
2. We use PostCSS and Autoprefixer
3. We use CSS Modules
4. We use HMR
5. There is React Router configuration here although we don't use it in this demo

This boilerplate needs improvements, but it is quite useful already.
If you have any ideas let me know. I plan to build an app based on it so it will be probably improved over time.

There will be also a blog post about it soon. Stay tuned...

ps. I've included `.hz/secrets.toml` here in the repo. In the real apps you don't want to do this ;) You need to keep your settings in secret.
