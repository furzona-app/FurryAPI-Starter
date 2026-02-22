const path = require("path");
const { Template } = require(path.resolve(path.dirname(require.main.filename), "classes"));

class User extends Template {
  #obj;

  constructor(obj) {
    super();
    this.#obj = obj;
  }

  toNetworkObject(context) {
    return {
      id: this.#obj.id,
      displayName: this.#obj.username,
      username: this.#obj.username,
      description: this.#obj.description,
      createdAt: this.#obj.created_at
    };
  }
}

module.exports = User;