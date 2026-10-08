import * as DBFrei from '../../repository/TarefasFreiRepository.js';
import {ValidarCriarTarefaF} from '../../validation/TarefasFreiValidation.js';

export async function CriarTarefaServiceF(tarefaF) {

    ValidarCriarTarefaF(tarefaF)
            let resposta = await DBFrei.CriarTarefaF(tarefaF);
            return resposta;
}