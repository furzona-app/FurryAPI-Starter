const fs = require("fs");
const path = require("path");

module.exports = {
  names: ["setup"],

  async *runCommand(name, args, { db, settings }) {
    // run startup sql
    for (let i = 0; i < settings.setupFiles.length; i++) {
      db.run(db.sql(settings.setupFiles[i]));
    }

    yield "Queries ran.";
  }
};