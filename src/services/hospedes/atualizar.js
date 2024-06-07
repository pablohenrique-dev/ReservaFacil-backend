const validarDadosHospedes = require("../../../utils/validar-dados-hospedes");
const {
  atualizarHospedeRepository,
  buscarHospedePorIdRepository,
} = require("../../repositories/hospedes");

async function atualizarHospedeServices({
  id,
  nome,
  email,
  endereco,
  telefone,
}) {
  try {
    const dadosDoHospedeSaoValidos = validarDadosHospedes({
      nome,
      email,
      endereco,
      telefone,
    });

    const hospede = await buscarHospedePorIdRepository(Number(id));

    if (hospede?.length === 0) {
      throw new Error("Hospede não encontrado");
    }

    if (!dadosDoHospedeSaoValidos) {
      throw new Error("Todos os dados precisam estar preenchidos");
    }

    return await atualizarHospedeRepository({
      id: Number(id),
      nome,
      email,
      endereco,
      telefone,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = atualizarHospedeServices;
