const buscarReservaPorIdServices = require("../../services/reservas/buscar-por-id");

async function buscarReservaPorIdController(req, res) {
  try {
    const { id } = req.params;
    const reserva = await buscarReservaPorIdServices(id);

    return res.status(200).json(reserva);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
}

module.exports = buscarReservaPorIdController;
