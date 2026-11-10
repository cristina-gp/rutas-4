import {
  createProductModel,
  getProductsModel,
  getProductByIdModel
} from "../model/product.model.js";

export async function createProductService(body) {
  const { nombre, tipo, color, modelo, precio } = body;
  try {
    const producto = await createProductModel(
      nombre,
      tipo,
      color,
      modelo,
      precio,
    );
    return {
      status: 201,
      message: "producto guardado",
    };
  } catch (e) {
    console.log("error al cargar el producto", e);
    return {
      status: 400,
      message: "error al cargar el producto",
    };
  }
}

export async function getProductsService() {
  try {
    const productos = await getProductsModel();
    return { status: 200, data: productos };
  } catch (e) {
    console.log("error del producto", e);
    return { status: 500, data: "error al leer la lista de los productos" };
  }
}

export async function getProductByIdService(id) {
  try {
    const producto = await getProductByIdModel(id);
    if (producto === null) {
      return { status: 404, data: "producto no encontrado" };
    }
    return { status: 200, data: producto };
  } catch (e) {
    console.log("error en el servicio", e);
    return { status: 500, data: "error al buscar el producto" };
  }
}
