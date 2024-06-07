const atualizarReservaServices = require("../../services/reservas/atualizar");

async function atualizarReservaController(req, res) {
  try {
    const { id } = req.params;
    const { data_checkin, data_checkout, status } = req.body;

    await atualizarReservaServices({
      reserva_id: Number(id),
      data_checkin,
      data_checkout,
      status,
    });

    return res.status(200).json({
      message: "Reserva atualizado com sucesso",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = atualizarReservaController;
