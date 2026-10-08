import con from './conexao/connection.js'

export async function CriarTarefaE(tarefaE) {
    let command = `
    INSERT INTO tarefasEscola(materia,paginasIni,paginasFim,conteudo,data_entrega,sobre)
    VALUES(?,?,?,?,?,?)
    `

    let [resposta] = await con.query(command, [
        tarefaE.materia,
        tarefaE.inicial,
        tarefaE.final,
        tarefaE.conteudo,
        tarefaE.data,
        tarefaE.sobre
    ])

    return resposta.insertId;
}

export async function EditarTarefaE(tarefaE,id) {
    let command = `
    UPDATE tarefasEscola
    SET materia = ?,
    paginasIni = ?,
    paginasFim = ?,
    conteudo = ?,
    data_entrega = ?,
    sobre = ?
    WHERE ID_tarefaE = ?
    `

    let [resposta] = await con.query(command, [
        tarefaE.materia,
        tarefaE.inicial,
        tarefaE.final,
        tarefaE.conteudo,
        tarefaE.data,
        tarefaE.sobre,
        id
    ])
    return resposta.insertId;
}

export async function ExcluirTarefaE(id) {
    let command = `
    DELETE FROM tarefasEscola
    WHERE ID_tarefaE = ?
    `

    let [resposta] = await con.query(command, [id])
    return resposta.affectedRows;
}

export async function ListarTarefasE() {
    let command = `
    SELECT ID_tarefaE, materia, paginasIni, paginasFim, conteudo, data_entrega, sobre
    FROM tarefasEscola
    `

    let [resposta] = await con.query(command)
    return resposta;
}
