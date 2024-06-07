const { listarReservasRepository } = require("../../repositories/reservas");

async function listarReservasServices() {
  try {
    return await listarReservasRepository();
  } catch (error) {
    throw error;
  }
}

module.exports = listarReservasServices;
