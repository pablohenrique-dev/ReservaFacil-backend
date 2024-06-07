const { listarHospedesRepository } = require("../../repositories/hospedes");

async function listarHospedesServices() {
  try {
    return await listarHospedesRepository();
  } catch (error) {
    throw error;
  }
}

module.exports = listarHospedesServices;
