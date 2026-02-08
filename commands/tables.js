module.exports = {
  names: ["tables"],

  async *runCommand(name, args, { db }) {
    if (args.length > 0) {
      const items = db.getList(`
        SELECT * FROM ${args[0]} LIMIT ${args[1] ?? 10}
      `);

      yield `Contents (${items.length}):`;
      
      const lines = JSON.stringify(items, null, 2).split("\n");
      for (let i = 0; i < lines.length; i++) {
        yield lines[i];
      }
    } else {
      const tables = db.getList(`
        SELECT name FROM sqlite_master WHERE type = 'table'
      `);

      yield `Tables (${tables.length}):`;
      for (let i = 0; i < tables.length; i++) {
        yield `- ${tables[i].name}`;
      }
    }
  }
};