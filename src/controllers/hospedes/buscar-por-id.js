const buscarHospedePorIdServices = require("../../services/hospedes/buscar-por-id");

async function buscarHospedePorIdController(req, res) {
  try {
    const { id } = req.params;
    const hospede = await buscarHospedePorIdServices(id);

    return res.status(200).json(hospede);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
}

module.exports = buscarHospedePorIdController;
