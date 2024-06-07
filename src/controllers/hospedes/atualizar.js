const atualizarHospedeServices = require("../../services/hospedes/atualizar");

async function atualizarHospedeController(req, res) {
  const { id } = req.params;
  const { nome, email, endereco, telefone } = req.body;

  try {
    await atualizarHospedeServices({
      id,
      nome,
      email,
      endereco,
      telefone,
    });

    return res.status(200).json({
      message: "Hospede atualizado com sucesso",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = atualizarHospedeController;
