const { z } = require("zod");
const bcrypt = require("bcrypt");

module.exports = {
  names: ["register"],
  schema: ({ config }) => ({
    email: z.email().min(1).max(255),
    password: z.string().min(8).max(255),
    day: z.number().min(1).max(31).describe("The user's birthday"),
    month: z.number().min(1).max(12).describe("The user's birthmonth"),
    year: z.number().min(1900).max(new Date().getFullYear() - config.minimumAge).describe("The user's birthyear (must be 13+)")
  }),
  errors: {
    notUnique: {
      "users.id": "autoIdNotUnique",
      "users.username": "autoUsernameNotUnique",
      "users.email": "emailNotUnique"
    }
  },

  async runFunction(name, body, { config, db, randomString, newSession }) {
    // hash the user's password
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(body.password, config.passwordSaltRounds, (err, hash) => {
        delete body.password; // safety

        if (err) {
          return reject(err);
        }

        resolve(hash);
      });
    });

    // create the user
    const user = db.get(`
      INSERT INTO users (id, username, email, password) VALUES ($->new_id(), ?, ?, ?) RETURNING *
    `, randomString(16), body.email, hashedPassword);

    return newSession(user.id);
  }
};