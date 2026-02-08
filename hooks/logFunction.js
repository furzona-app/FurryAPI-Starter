module.exports = {
  runFunctionHook(name, body, {}, func) {
    console.log("CALL: function " + name);
  },
  
  runViewHook(route, {}, view) {
    console.log("ROUTE: view " + route);
  }
};