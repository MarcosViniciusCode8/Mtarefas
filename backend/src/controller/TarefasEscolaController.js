import { Router } from "express";
const endpoints = Router();
import { ListarTarefaServiceE } from "../service/escola/ListarTarefaEscolaService.js";
import { CriarTarefaServiceE } from "../service/escola/CriarTarefaEscolaService.js";
import { EditarTarefaServiceE } from "../service/escola/EditarTarefaEscolaService.js";
import { ExcluirTarefaServiceE } from "../service/escola/ExcluirTarefaEscolaService.js";

endpoints.get('/escola/listar', async (req, resp) => {
    try {

        let resposta = await ListarTarefaServiceE()

        resp.send({
            tarefas: resposta
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/escola/criar', async (req, resp) => {
    try {
        let tarefaE = req.body;

        let resposta = await CriarTarefaServiceE(tarefaE)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.put('/escola/editar/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let tarefaE = req.body;

        let resposta = await EditarTarefaServiceE(tarefaE,id)
        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/escola/excluir/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await ExcluirTarefaServiceE(id);
        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;