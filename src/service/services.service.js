import { createServiceModel } from "../model/service.model.js";

export async function createServicesService(body) {
  const { nombre, precio } = body;
  try {
    const producto = await createServiceModel(
      nombre,
      precio,
    );
    return {
      status: 201,
      message: "servicio guardado",
    };
  } catch (e) {
    console.log("error al cargar el servicio", e);
    return {
      status: 400,
      message: "error al cargar el servicio",
    };
  }
}
