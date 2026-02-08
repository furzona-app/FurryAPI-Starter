module.exports = {
  async render(route, { isLoggedIn, thisUser }) {
    return {
      name: isLoggedIn() ? thisUser.username : "(name)"
    };
  }
};