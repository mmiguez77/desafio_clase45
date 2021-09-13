"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");


Route.on('/').render('home')

// Producto Routes
Route.get("/productos", "ProductoController.index");
Route.get("/productos/:id", "ProductoController.details");
Route.post('/productos', 'ProductoController.store')
Route.put('/productos/:id', 'ProductoController.update')
Route.delete('/productos/:id', 'ProductoController.destroy')