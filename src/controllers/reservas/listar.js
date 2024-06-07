const listarReservasServices = require("../../services/reservas/listar");

async function listarReservasController(req, res) {
  try {
    const reservas = await listarReservasServices();
    return res.status(200).json(reservas);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = listarReservasController;
