const {
  validarDadosCriarReserva,
} = require("../../../utils/validar-dados-reserva");
const {
  criarReservaRepository,
  buscarReservaPorNumeroRepository,
} = require("../../repositories/reservas");

async function criarReservaServices({ data_checkin, data_checkout, hospedes }) {
  try {
    const dadosParaCriarReservaSaoValidos = validarDadosCriarReserva({
      data_checkin,
      data_checkout,
      hospedes,
    });

    if (!dadosParaCriarReservaSaoValidos) {
      throw new Error(
        "Todos os dados para criar reserva precisam estar preenchidos"
      );
    }

    const numero_reserva = Math.floor(Math.random() * 10000);

    const reservaJaExiste = await buscarReservaPorNumeroRepository(
      numero_reserva
    );

    if (reservaJaExiste?.length > 0) {
      throw new Error("Uma reserva com este número já existe");
    }

    return await criarReservaRepository({
      numero_reserva,
      data_checkin,
      data_checkout,
      hospedes,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = criarReservaServices;
