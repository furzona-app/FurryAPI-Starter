module.exports = {
  names: ["User"],
  sqlFields: {
    NO_DESCRIPTION: ["id", "username", "created_at"],
    PUBLIC: ["id", "username", "description", "created_at"],
    PRIVATE: ["id", "username", "description", "created_at"],
    ALL: ["*"],
  },

  async runTemplate(obj, {}) {
    return {
      id: obj.id,
      displayName: obj.username, // TODO
      username: obj.username,
      description: obj.description,
      createdAt: obj.created_at
    };
  }
};