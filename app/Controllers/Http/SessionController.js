"use strict";

class SessionController {
  async create({ request, auth }) {
    const { email, senha } = request.all();

    const token = await auth.attempt(email, senha);

    return token;
  }
}

module.exports = SessionController;
