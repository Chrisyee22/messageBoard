require("dotenv").config();
const path = require("path");
const viewsFolder = path.join(_dirname, "..", "views");

module.exports = {
  init(){
  }
  init(app, express){
    app.set("views", viewsFolder);
    app.set("view engine", "ejs");
    app.use(express.static(path.join(_dirname, "..", "assets")));
  }
};
