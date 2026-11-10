import {createServicesService} from "../service/services.service.js";


export async function createServiceController(req, res) {
    const body = req.body;
    const resultado = await createServicesService(body);
    res.status(resultado.status).send(resultado.message);
}