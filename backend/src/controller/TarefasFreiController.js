import { Router } from "express";
const endpoints = Router();
import { ListarTarefaServiceF } from "../service/frei/ListarTarefaFreiService.js";
import { CriarTarefaServiceF } from "../service/frei/CriarTarefaFreiService.js";
import { EditarTarefaServiceF } from "../service/frei/EditarTarefaFreiService.js";
import { ExcluirTarefaServiceF } from "../service/frei/ExcluirTarefaFreiService.js";

endpoints.get('/frei/listar', async (req, resp) => {
    try {

        let resposta = await ListarTarefaServiceF()

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

endpoints.post('/frei/criar', async (req, resp) => {
    try {
        let tarefaF = req.body;

        let resposta = await CriarTarefaServiceF(tarefaF)

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

endpoints.put('/frei/editar/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let tarefaF = req.body;

        let resposta = await EditarTarefaServiceF(tarefaF, id)
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

endpoints.delete('/frei/excluir/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await ExcluirTarefaServiceF(id)

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