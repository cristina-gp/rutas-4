import {
  createProductService,
  getProductsService,
  getProductByIdService
} from "../service/product.service.js";

export async function createProductController(req, res) {
  const body = req.body;
  const resultado = await createProductService(body);
  res.status(resultado.status).send(resultado.message);
}

export async function getProductsController(req, res) {
  const resultado = await getProductsService();
  res.status(resultado.status).send(resultado.data);
}

export async function getProductByIdController(req, res) {
  const id = req.params.id;
  const resultado = await getProductByIdService(id);
  res.status(resultado.status).send(resultado.data);
}
