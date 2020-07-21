const express = require('express');
const routes = express.Router();
const JobController = require("./controllers/JobController");
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const JobApplicationController = require("./controllers/JobApplicationController");
const authMiddleware = require("./middlewares/auth");

routes.post("/register", AuthController.register);
routes.post("/login", AuthController.login);
routes.post("/logoff", AuthController.logoff);


routes.get("/jobs", authMiddleware, JobController.index);
routes.get("/jobs/:id", authMiddleware, JobController.show);
routes.post("/jobs", authMiddleware, JobController.store);
routes.put("/jobs/:id", authMiddleware, JobController.update);
routes.delete("/jobs/:id", authMiddleware, JobController.destroy);

routes.post("/users", authMiddleware, UserController.index);

routes.get("/applications/:user_id", JobApplicationController.myApplications);
routes.post("/applications/applyforjob", JobApplicationController.applyForJob);

module.exports = routes;