module.exports = {
  names: ["init"],

  async *runCommand(name, args, { db, randomString }) {
    db.shorthand("id", "id TEXT NOT NULL UNIQUE");
    db.shorthand("created_at", "created_at INTEGER DEFAULT (CAST(unixepoch('subsec') * 1000 AS INTEGER))");
    db.shorthand("new_id()", () => {
      return `'${randomString(10)}'`;
    });
    db.run(db.sql("init.sql"));
  }
};