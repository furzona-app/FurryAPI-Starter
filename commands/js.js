module.exports = {
  names: ["js", "javascript", "eval", "return"],

  async *runCommand(name, args, {}) {
    yield await eval("async () => { return " + args.join(" ") + " }")();
  }
};