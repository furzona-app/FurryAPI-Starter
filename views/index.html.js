module.exports = {
  async render(route, { isLoggedIn, thisUser }, view) {
    return {
      name: isLoggedIn() ? thisUser.username : "(name)"
    };
  }
};