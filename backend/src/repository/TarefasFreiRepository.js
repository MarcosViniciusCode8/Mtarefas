import con from './conexao/connection.js'

export async function CriarTarefaF(tarefaF) {
    let command = `
    INSERT INTO tarefasFrei(materia, paginasIni, paginasFim, conteudo, data_entrega, sobre)
    VALUES(?, ?, ?, ?, ?, ?)
    `

    let [resposta] = await con.query(command, [
        tarefaF.materia,
        tarefaF.inicial,
        tarefaF.final,
        tarefaF.conteudo,
        tarefaF.data,
        tarefaF.sobre
    ])

    return resposta.insertId;
}

export async function EditarTarefaF(tarefaF, id) {
    let command = `
    UPDATE tarefasFrei
    SET materia = ?,
    paginasIni = ?,
    paginasFim = ?,
    conteudo = ?,
    data_entrega = ?,
    sobre = ?
    WHERE ID_tarefaF = ?
    `

    let [resposta] = await con.query(command, [
        tarefaF.materia,
        tarefaF.inicial,
        tarefaF.final,
        tarefaF.conteudo,
        tarefaF.data,
        tarefaF.sobre,
        id
    ])

    return resposta.insertId;
}

export async function ExcluirTarefaF(id) {
    let command = `
    DELETE FROM tarefasFrei
    WHERE ID_tarefaF = ?
    `

    let [resposta] = await con.query(command, [id])
    return resposta.affectedRows;
}

export async function ListarTarefasF() {
    let command = `
    SELECT ID_tarefaF, materia, paginasIni, paginasFim, conteudo, data_entrega, sobre
    FROM tarefasFrei
    `

    let [resposta] = await con.query(command)
    return resposta;
}
