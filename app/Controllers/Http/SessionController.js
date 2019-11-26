"use strict";

const User = use("App/Models/User");

class SessionController {
  async create({ request, auth, response }) {
    const { email, senha } = request.all();

    const token = await auth.attempt(email, senha);

    const user = await User.findByOrFail("email", email);

    return response.send({ user, token });
  }
}

module.exports = SessionController;
