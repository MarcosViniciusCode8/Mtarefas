import * as DBEscola from '../../repository/TarefasEscolaRepository.js';
import {ValidarExcluirTarefaE} from '../../validation/TarefasEscolaValidation.js';

export async function ExcluirTarefaServiceE(id) {

    ValidarExcluirTarefaE(id)

    let resposta = await DBEscola.ExcluirTarefaE(id)
    return resposta;
}