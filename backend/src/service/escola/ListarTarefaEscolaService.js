import * as DBEscola from '../../repository/TarefasEscolaRepository.js';

export async function ListarTarefaServiceE() {
    let resposta = await DBEscola.ListarTarefasE()
    return resposta;
}