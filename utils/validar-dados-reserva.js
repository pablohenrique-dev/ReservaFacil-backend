function validarDadosCriarReserva({ data_checkin, data_checkout, hospedes }) {
  if (!data_checkin || !data_checkout || hospedes?.length === 0) {
    return false;
  }

  return true;
}

function validarDadosAtualizarReserva({ data_checkin, data_checkout, status }) {
  if (!data_checkin || !data_checkout || !status) {
    return false;
  }

  return true;
}

module.exports = { validarDadosCriarReserva, validarDadosAtualizarReserva };
