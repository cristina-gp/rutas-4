import prisma from "../db.js";

export async function createServiceModel (nombre,precio) {

try {
    const producto = await prisma.servicio.create({
      data: {  nombre,precio },
    });
    return producto;
  } catch (e) {
    console.log(e);
    throw new Error("error de carga");
  }
}