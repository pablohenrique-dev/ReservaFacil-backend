const { Router } = require("express");
const criarReservaController = require("../controllers/reservas/criar");
const listarReservasController = require("../controllers/reservas/listar");
const buscarReservaPorIdController = require("../controllers/reservas/buscar-por-id");
const atualizarReservaController = require("../controllers/reservas/atualizar");

const reservasRoutes = Router();

reservasRoutes.post("/reservas", criarReservaController);
reservasRoutes.get("/reservas", listarReservasController);
reservasRoutes.get("/reservas/:id", buscarReservaPorIdController);
reservasRoutes.patch("/reservas/:id", atualizarReservaController);

module.exports = reservasRoutes;
