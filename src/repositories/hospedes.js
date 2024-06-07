const db = require("../../db");

async function criarHospedeRepository({ nome, email, endereco, telefone }) {
  try {
    return await db.raw(
      "INSERT INTO hospedes (nome, email, endereco, telefone) VALUES (?, ?, ?, ?)",
      [nome, email, endereco, telefone]
    );
  } catch (error) {
    throw new Error("Erro ao cadastrar hospede");
  }
}

async function buscarHospedePorEmailRepository(email) {
  try {
    const hospede = await db.raw(
      "SELECT * FROM hospedes WHERE email = ?",
      email
    );

    return hospede.rows;
  } catch (error) {
    throw new Error("Erro ao buscar hospede pelo e-mail");
  }
}

async function listarHospedesRepository() {
  try {
    const hospedes = await db.raw("SELECT * FROM hospedes");

    return hospedes.rows;
  } catch (error) {
    throw new Error("Não foi possível listar os hospedes");
  }
}

async function buscarHospedePorIdRepository(id) {
  try {
    const hospede = await db.raw("SELECT * FROM hospedes WHERE id = ?", id);

    return hospede.rows;
  } catch (error) {
    throw new Error("Não foi possível encontrar o hospede");
  }
}

async function atualizarHospedeRepository({
  id,
  nome,
  email,
  endereco,
  telefone,
}) {
  try {
    return await db.raw(
      `
        UPDATE hospedes
        SET 
          nome = ?,
          email = ?,
          endereco = ?,
          telefone = ?
        WHERE id = ?
      `,
      [nome, email, endereco, telefone, id]
    );
  } catch (error) {
    throw new Error("Não foi possível listar os hospedes");
  }
}

module.exports = {
  criarHospedeRepository,
  buscarHospedePorEmailRepository,
  buscarHospedePorIdRepository,
  listarHospedesRepository,
  atualizarHospedeRepository,
};
