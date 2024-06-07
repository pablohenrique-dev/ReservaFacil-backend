const { buscarReservaPorIdRepository } = require("../../repositories/reservas");

async function buscarReservaPorIdServices(id) {
  try {
    const reserva = await buscarReservaPorIdRepository(id);

    if (reserva?.length === 0) {
      throw new Error("Reserva não encontrada");
    }

    return reserva[0];
  } catch (error) {
    throw error;
  }
}

module.exports = buscarReservaPorIdServices;
