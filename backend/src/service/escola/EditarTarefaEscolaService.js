import * as DBEscola from '../../repository/TarefasEscolaRepository.js';
import {ValidarEditarTarefaE} from '../../validation/TarefasEscolaValidation.js';


export async function EditarTarefaServiceE(tarefaE, id) {

    ValidarEditarTarefaE(tarefaE, id);

    let resposta = await DBEscola.EditarTarefaE(tarefaE, id)
    return resposta;
}