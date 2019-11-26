"use strict";
const User = use("App/Models/User");

class UserController {
  async create({ request, auth, response }) {
    const data = request.only([
      "nome",
      "email",
      "senha",
      "data_nascimento",
      "cpf",
      "nick"
    ]);

    try {
      const user = await User.create(data);

      const token = await auth.withRefreshToken().generate(user);

      return response.send({ usuario: user, token });
    } catch (e) {
      return response.status(400).send({ erro: e });
    }
  }

  async update({ request, response }) {
    const data = request.only([
      "nome",
      "email",
      "senha",
      "data_nascimento",
      "cpf",
      "nick",
      "id"
    ]);

    const user = await User.find(data.id);

    if (!user) {
      return response.status(404).send({ erro: "Usuário não encontrado" });
    }

    user.nome = data.nome;
    user.email = data.email;
    user.senha = data.senha;
    user.data_nascimento = data.data_nascimento;
    user.cpf = data.cpf;
    user.nick = data.nick;

    await user.save();

    return user;
  }

  async show({ request, response }) {
    const data = request.only(["id"]);

    const user = await User.find(data.id);

    if (!user) {
      return response.status(404).send({ erro: "Usuário não encontrado" });
    }
    const token = await user.tokens().fetch();
    return response.send({ user, token });
  }

  async delete({ request, response }) {
    const data = request.only(["id"]);

    const user = await User.find(data.id);

    if (!user) {
      return response.status(404).send({ erro: "Usuário não encontrado" });
    }

    await user.delete();
    await user.revokeTokens();

    return response.send({ sucesso: "Usuário excluido com sucesso" });
  }
}
module.exports = UserController;
