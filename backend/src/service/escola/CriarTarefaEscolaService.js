import * as DBEscola from '../../repository/TarefasEscolaRepository.js';
import {ValidarCriarTarefaE} from '../../validation/TarefasEscolaValidation.js';

export async function CriarTarefaServiceE(tarefaE) {

    ValidarCriarTarefaE(tarefaE);

    let resposta = await DBEscola.CriarTarefaE(tarefaE);
    return resposta;
}