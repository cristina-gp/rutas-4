import { getUserService, createUserService } from "../service/user.service.js";

export async function getUserController(req, res) {
    res.status(200).send(await getUserService());
}

export async function createUserController(req, res) {
  const body = req.body;
  const resultado = await createUserService(body);
  res.status(resultado.status).send(resultado.message);
}