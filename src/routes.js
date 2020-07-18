const express = require('express');
const routes = express.Router();
const JobController = require("./controllers/JobController");
const UserController = require("./controllers/UserController");
const LoginController = require("./controllers/LoginController");
const authMiddleware = require("./middlewares/auth");

routes.post("/login", LoginController.login);

routes.get("/jobs", authMiddleware, JobController.index);
routes.get("/jobs/:id", JobController.show);
routes.post("/jobs", JobController.store);
routes.put("/jobs/:id", JobController.update);
routes.delete("/jobs/:id", JobController.destroy);

routes.post("users", UserController.index);

module.exports = routes;