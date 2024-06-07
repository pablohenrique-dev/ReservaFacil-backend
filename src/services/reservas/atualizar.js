const {
  validarDadosAtualizarReserva,
} = require("../../../utils/validar-dados-reserva");
const {
  buscarReservaPorIdRepository,
  atualizarReservaRespository,
} = require("../../repositories/reservas");

async function atualizarReservaServices({
  reserva_id,
  data_checkin,
  data_checkout,
  status,
}) {
  try {
    const dadosParaAtualizarReservaSaoValidos = validarDadosAtualizarReserva({
      data_checkin,
      data_checkout,
      status,
    });

    if (!dadosParaAtualizarReservaSaoValidos) {
      throw new Error(
        "Todos os dados para atualizar a reserva precisam estar preenchidos"
      );
    }

    const reserva = await buscarReservaPorIdRepository(reserva_id);

    if (reserva?.length === 0) {
      throw new Error("Reserva não encontrada");
    }

    return await atualizarReservaRespository({
      reserva_id,
      data_checkin,
      data_checkout,
      status,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = atualizarReservaServices;
