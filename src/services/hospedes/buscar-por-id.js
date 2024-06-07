const { buscarHospedePorIdRepository } = require("../../repositories/hospedes");

async function buscarHospedePorIdServices(id) {
  try {
    const hospede = await buscarHospedePorIdRepository(Number(id));

    if (hospede?.length === 0) {
      throw new Error("Hospede não encontrado");
    }

    return hospede[0];
  } catch (error) {
    throw error;
  }
}

module.exports = buscarHospedePorIdServices;
