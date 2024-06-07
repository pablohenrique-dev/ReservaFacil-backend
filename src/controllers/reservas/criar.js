const criarReservaServices = require("../../services/reservas/criar");

async function criarReservaController(req, res) {
  try {
    const { data_checkin, data_checkout, hospedes } = req.body;

    await criarReservaServices({
      data_checkin,
      data_checkout,
      hospedes,
    });

    return res.status(201).json({
      message: "Reserva criada com sucesso",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = criarReservaController;
