"use strict";
const Producto = use("App/Models/Producto");

class ProductoController {
  async index() {
    const producto = await Producto.all();
    return producto;
  }

  async details({ params }) {
    const producto = await Producto.find(params.id);

    return producto;
  }

  async store({ request, response, session }) {
    const producto = new Producto();

    producto.title = request.input("title");
    producto.price = request.input("price");
    producto.description = request.input("description");

    await producto.save();

    return producto;
  }

  async destroy({ params, session, response }) {
    const producto = await Producto.find(params.id);

    await producto.delete();

    return "Producto Eliminado";
  }
}

module.exports = ProductoController;
