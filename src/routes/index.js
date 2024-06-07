const { Router } = require("express");
const hospedesRoutes = require("./hospedes");
const reservasRoutes = require("./reservas");

const routes = Router();

routes.use(hospedesRoutes);
routes.use(reservasRoutes);

module.exports = routes;
