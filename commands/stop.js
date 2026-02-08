module.exports = {
  names: ["stop"],

  async *runCommand(name, args, { api }) {
    const wasRunning = await api.stopServer(args[0] != "grace");

    if (wasRunning) {
      yield "Server stopped";
    }
  }
};