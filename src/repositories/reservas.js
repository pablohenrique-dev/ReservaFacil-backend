const db = require("../../db/index");

async function criarReservaRepository({
  numero_reserva,
  data_checkin,
  data_checkout,
  hospedes,
}) {
  try {
    return await db.transaction(async (trx) => {
      const [reserva] = await trx("reservas")
        .insert({
          numero_reserva,
          data_checkin,
          data_checkout,
          status: "pendente",
        })
        .returning("id");

      const hospedesReserva = hospedes.map((hospede_id) => {
        return {
          hospede_id,
          reserva_id: reserva.id,
        };
      });

      await trx("reservas_hospedes").insert(hospedesReserva);
    });
  } catch (error) {
    throw new Error("Não foi possível criar uma reserva");
  }
}

async function buscarReservaPorNumeroRepository(numeroReserva) {
  try {
    const reserva = await db.raw(
      "SELECT * FROM reservas WHERE numero_reserva = ?;",
      [numeroReserva]
    );

    return reserva.rows;
  } catch (error) {
    throw new Error("Não foi possível encontrar a reserva");
  }
}

async function listarReservasRepository() {
  try {
    const reservas = await db.raw(
      `
        SELECT 
          r.id AS reserva_id,
          r.numero_reserva,
          r.data_checkin,
          r.data_checkout,
          r.status,
          json_agg(
            json_build_object(
              'hospede_id', h.id,
              'nome', h.nome,
              'email', h.email,
              'telefone', h.telefone,
              'endereco', h.endereco
            )
          ) AS hospedes   
        FROM 
          reservas r
        JOIN 
          reservas_hospedes rh ON r.id = rh.reserva_id
        JOIN
          hospedes h ON rh.hospede_id = h.id
        GROUP BY 
          r.id
        ORDER BY 
          r.id DESC;
      `
    );

    return reservas.rows;
  } catch (error) {
    throw new Error("Não foi possível listar as reservas");
  }
}

async function buscarReservaPorIdRepository(id) {
  try {
    const reserva = await db.raw(
      `
        SELECT 
          r.id AS reserva_id,
          r.numero_reserva,
          r.data_checkin,
          r.data_checkout,
          r.status,
          json_agg(
            json_build_object(
              'hospede_id', h.id,
              'nome', h.nome,
              'email', h.email,
              'telefone', h.telefone,
              'endereco', h.endereco
            )
          ) AS hospedes   
        FROM 
          reservas r
        JOIN 
          reservas_hospedes rh ON r.id = rh.reserva_id
        JOIN
          hospedes h ON rh.hospede_id = h.id
        WHERE
          r.id = ?
        GROUP BY 
          r.id;
      `,
      [id]
    );

    return reserva.rows;
  } catch (error) {
    throw new Error("Não foi possível encontrar a reserva");
  }
}

async function atualizarReservaRespository({
  reserva_id,
  data_checkin,
  data_checkout,
  status,
}) {
  try {
    const updateReservaSQL = `
        UPDATE reservas
        SET data_checkin = ?, data_checkout = ?, status = ?
        WHERE id = ?;
      `;
    return await db.raw(updateReservaSQL, [
      data_checkin,
      data_checkout,
      status,
      reserva_id,
    ]);
  } catch (error) {
    throw new Error("Não foi possível atualizar a reserva");
  }
}

module.exports = {
  criarReservaRepository,
  buscarReservaPorNumeroRepository,
  listarReservasRepository,
  buscarReservaPorIdRepository,
  atualizarReservaRespository,
};
