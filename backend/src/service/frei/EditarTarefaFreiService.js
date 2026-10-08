import * as DBFrei from '../../repository/TarefasFreiRepository.js';
import {ValidarEditarTarefaF} from '../../validation/TarefasFreiValidation.js';

export async function EditarTarefaServiceF(tarefaF, id) {
    ValidarEditarTarefaF(tarefaF, id)
            let resposta = await DBFrei.EditarTarefaF(tarefaF, id)
            return resposta;
}

