import prisma from "../db.js";

export async function createProductModel(nombre, tipo, color, modelo, precio) {
  try {
    const producto = await prisma.producto.create({
      data: { nombre, tipo, color, modelo, precio },
    });
    return producto;
  } catch (e) {
    console.log(e);
    throw new Error("error de carga");
  }
}

export async function getProductsModel() {
  try {
    const productos = await prisma.producto.findMany();

    return productos;
  } catch (e) {
    console.log(e);
    throw new Error("error al leer");
  }
}

export async function getProductByIdModel(id) {
  try {
    const producto = await prisma.producto.findUnique({
      where: { id: id },
    });

    return producto;
  } catch (e) {
    console.log(e);
    throw new Error("error al buscar el producto");
  }
}
