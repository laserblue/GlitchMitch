# UNDER CONSTRUCTION
# Coming to a Glitch Project Soon

I am currently bogged down in the development environment configuration and need to learn how to set up Express.js, Webpack and work with Glitch environment variables. 
I am going to try to get the  Phaser 3.55.2 template working  with Babel and Webpack (without Typescript) so this project might be down for a while

1. I need to learn how to use the Rewind tool
2. I need to learn how to use the .env folder

Since webpack v5.0.0-beta.1 the minimum Node.js version to run webpack is 10.13.0 (LTS)

Get node version at terminal prompt: $ node -v
Currently using: Node.js v10.15.3

Added script to package.json: "start": "webpack-dev-server --inline --hot --host 0.0.0.0 --public $PROJECT_DOMAIN.glitch.me --config webpack/base.js --open"
This might not be the best way but it works.
This coder would like to work with Express and relative paths (trapezoidal-tarsal project)
The Glitch assets folder is not being used and it might be better if it was used rather than relative paths 
This neophyte coder does not know how to upload images to src/assets/ 
Initial attempt to get SceneMain running from ./scenes/sceneMain.js did not work.


# Phaser 3 Webpack Project Template

A Phaser 3 project template with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/)
that includes hot-reloading for development and production-ready builds.

Loading images via JavaScript module `import` is also supported.

## Glitch variation
These instructions need to be modified for Glitch cloning and use on Glitch. 

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm start`.


After starting the development server with `npm start`, you can edit any files in the `src` folder
and webpack will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

## Customizing Template

### Babel
You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you
want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently
targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

  ```
  "browsers": [
    ">0.25%",
    "not ie 11",
    "not op_mini all"
  ]
  ```

### Webpack
If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code
After you run the `npm run build` command, your code will be built into a single bundle located at 
`dist/bundle.min.js` along with any other assets you project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), 
you should be able to open `http://mycoolserver.com/index.html` and play your game.
