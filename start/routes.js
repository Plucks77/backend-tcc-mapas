"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
//user
Route.post("/user/create", "UserController.create");
Route.post("/user/show/:id", "UserController.show").middleware("auth");
Route.put("/user/update/:id", "UserController.update").middleware("auth");
Route.delete("/user/delete/:id", "UserController.delete").middleware("auth");

Route.post("/login", "SessionController.create");

//evento
Route.post("/evento/create", "EventoController.create").middleware("auth");
Route.post("/evento/show", "EventoController.show");
