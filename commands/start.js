module.exports = {
  names: ["start"],

  async *runCommand(name, args, { api, db }) {
    const port = await api.startServer(args[0]);
    yield `Server started on port ${port}`;
  }
};