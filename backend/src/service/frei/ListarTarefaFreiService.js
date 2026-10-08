import * as DBFrei from '../../repository/TarefasFreiRepository.js';


export async function ListarTarefaServiceF() {
    let resposta = await DBFrei.ListarTarefasF()
    return resposta;
}
