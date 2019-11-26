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

Route.post("/user/create", "UserController.create");
Route.post("/user/update", "UserController.update").middleware("auth");
Route.post("/user/show", "UserController.show").middleware("auth");
Route.post("/user/delete", "UserController.delete").middleware("auth");

Route.post("/login", "SessionController.create");
