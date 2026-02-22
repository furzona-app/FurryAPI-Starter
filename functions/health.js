module.exports = {
  names: ["health"],

  async runFunction(name, body, { context, debug, isLoggedIn, thisUser, User, NetworkObjectable }) {
    const response = {healthy: true, disruptions: []};

    if (debug) {
      response.debug = {
        loggedIn: isLoggedIn(),
        user: thisUser
      };
    }

    return response;
  }
};