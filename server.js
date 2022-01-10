// I suspect that the problem getting external scene files to run is connected to Express routing
// it might be necessary to add Babel to get ES6 and import, export to work (???)
// ES5 - script in head of index.html 
// server.js
// where your node app starts

// init project
const express = require("express");
// const phaser = require("phaser"); // ?? require phaser ???
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var router = express.Router()

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// "Express looks up the files in the order in which you set the static directories with the express.static middleware function."

// app.use(express.static(__dirname + "/js"));


app.use(express.static("views")); 
app.use(express.static("public")); //won't work with "/public" (white screen)
app.use(express.static("js"));



// init sqlite db
const dbFile = "./.data/sqlite.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(() => {
  if (!exists) {
    db.run(
      "CREATE TABLE Dreams (id INTEGER PRIMARY KEY AUTOINCREMENT, dream TEXT)"
    );
    console.log("New table Dreams created!");

    // insert default dreams
    db.serialize(() => {
      db.run(
        'INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")'
      );
    });
  } else {
    console.log('Database "Dreams" ready to go!');
    db.each("SELECT * from Dreams", (err, row) => {
      if (row) {
        console.log(`record: ${row.dream}`);
      }
    });
  }
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// endpoint to get all the dreams in the database
app.get("/getDreams", (request, response) => {
  db.all("SELECT * from Dreams", (err, rows) => {
    response.send(JSON.stringify(rows));
  });
});

// endpoint to add a dream to the database
app.post("/addDream", (request, response) => {
  console.log(`add to dreams ${request.body}`);

  // DISALLOW_WRITE is an ENV variable that gets reset for new projects so you can write to the database
  if (!process.env.DISALLOW_WRITE) {
    const cleansedDream = cleanseString(request.body.dream);
    db.run(`INSERT INTO Dreams (dream) VALUES (?)`, cleansedDream, error => {
      if (error) {
        response.send({ message: "error!" });
      } else {
        response.send({ message: "success" });
      }
    });
  }
});

// endpoint to clear dreams from the database
app.get("/clearDreams", (request, response) => {
  // DISALLOW_WRITE is an ENV variable that gets reset for new projects so you can write to the database
  if (!process.env.DISALLOW_WRITE) {
    db.each(
      "SELECT * from Dreams",
      (err, row) => {
        console.log("row", row);
        db.run(`DELETE FROM Dreams WHERE ID=?`, row.id, error => {
          if (row) {
            console.log(`deleted row ${row.id}`);
          }
        });
      },
      err => {
        if (err) {
          response.send({ message: "error!" });
        } else {
          response.send({ message: "success" });
        }
      }
    );
  }
});

// Serve up an un-minified Phaser direct from node_modules for development
app.get('/phaser.js', function(request, response) {
  response.sendFile(__dirname + '/node_modules/phaser/dist/phaser.js');
});


// When you're not actively developing, use the minified Phaser to reduce load times.
app.get('/phaser.min.js', function(request, response) {
  response.sendFile(__dirname + '/node_modules/phaser/dist/phaser.min.js');
});

// helper function that prevents html/css/script malice
const cleanseString = function(string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

