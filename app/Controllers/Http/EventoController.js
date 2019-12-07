"use strict";

const Evento = use("App/Models/Evento");

class EventoController {
  async create({ request, response }) {
    const data = request.only([
      "id_criador",
      "nome",
      "descricao",
      "data",
      "valor",
      "privado",
      "max_participantes",
      "latitude",
      "longitude"
    ]);

    try {
      const evento = await Evento.create(data);

      return response.send({ evento });
    } catch (e) {
      return response.status(400).send({ erro: e });
    }
  }

  async show({ response }) {
    try {
      const eventos = await Evento.all();
      return response.send({ eventos });
    } catch (e) {
      return response.status(400).send({ erro: e });
    }
  }
}

module.exports = EventoController;
