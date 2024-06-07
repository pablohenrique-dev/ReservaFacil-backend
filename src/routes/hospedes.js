const { Router } = require("express");
const criarHospedeController = require("../controllers/hospedes/criar");
const listarHospedesController = require("../controllers/hospedes/listar");
const buscarHospedePorIdController = require("../controllers/hospedes/buscar-por-id");
const atualizarHospedeController = require("../controllers/hospedes/atualizar");

const hospedesRoutes = Router();

hospedesRoutes.get("/hospedes", listarHospedesController);
hospedesRoutes.post("/hospedes", criarHospedeController);
hospedesRoutes.get("/hospedes/:id", buscarHospedePorIdController);
hospedesRoutes.patch("/hospedes/:id", atualizarHospedeController);

module.exports = hospedesRoutes;
