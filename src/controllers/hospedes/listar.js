const listarHospedesServices = require("../../services/hospedes/listar");

async function listarHospedesController(req, res) {
  try {
    const hospedes = await listarHospedesServices();

    return res.status(200).json(hospedes);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = listarHospedesController;
