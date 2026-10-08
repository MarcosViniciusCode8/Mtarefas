import * as DBFrei from '../../repository/TarefasFreiRepository.js';
import {ValidarExcluirTarefaF} from '../../validation/TarefasFreiValidation.js';

export async function ExcluirTarefaServiceF(id){
        ValidarExcluirTarefaF(id);
        let resposta = DBFrei.ExcluirTarefaF(id)
        return resposta;
}