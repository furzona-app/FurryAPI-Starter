module.exports = {
  names: ["health"],

  async runFunction(name, body, { debug, isLoggedIn, thisUser, User }) {
    const response = {healthy: true, disruptions: []};

    if (debug) {
      response.debug = {
        loggedIn: isLoggedIn(),
        user: await User.from(thisUser)
      };
    }
    
    return response;
  }
};