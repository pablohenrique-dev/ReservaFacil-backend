const {
  criarHospedeRepository,
  buscarHospedePorEmailRepository,
} = require("../../repositories/hospedes");
const validarDadosHospedes = require("../../../utils/validar-dados-hospedes");

async function criarHospedeServices({ nome, email, endereco, telefone }) {
  try {
    const dadosDoHospedeSaoValidos = validarDadosHospedes({
      nome,
      email,
      endereco,
      telefone,
    });

    if (!dadosDoHospedeSaoValidos) {
      throw new Error("Todos os dados precisam estar preenchidos");
    }

    const hospedeJaExiste = await buscarHospedePorEmailRepository(email);

    if (hospedeJaExiste?.length > 0) {
      throw new Error("O e-mail fornecido já existe");
    }

    return await criarHospedeRepository({
      nome,
      email,
      endereco,
      telefone,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = criarHospedeServices;
