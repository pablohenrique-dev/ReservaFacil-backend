const criarHospedeServices = require("../../services/hospedes/criar");

async function criarHospedeController(req, res) {
  const { nome, email, endereco, telefone } = req.body;

  try {
    await criarHospedeServices({
      nome,
      email,
      endereco,
      telefone,
    });

    return res.status(201).json({
      message: "Hospede criado com sucesso",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = criarHospedeController;
