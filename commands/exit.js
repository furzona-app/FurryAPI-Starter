module.exports = {
  names: ["exit"],

  async *runCommand(name, args, { api, context }) {
    yield* api.callCommand(context, "stop");

    process.exit(0);
  }
};