import {getUserModel, createUserModel} from "../model/user.model.js"


export function getUserService(){
    return "getUserService"
}

export async function createUserService(body) {
  const { email, username, name } = body;
  try {
    const user = await createUserModel(email, username, name);
    return {
      status: 201,
      message: "usuario guardado",
    };
  } catch (e) {
    console.log("este es el error del servicio", e);
    return {
      status: 400,
      message: "error al guardar usuario",
    };
  }
}