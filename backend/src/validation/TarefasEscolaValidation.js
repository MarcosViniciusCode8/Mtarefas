export function ValidarCriarTarefaE(tarefaE) {

    if (!tarefaE.materia) {
        throw new Error("A matéria é obrigatória")
    }

    if (!tarefaE.inicial) {
        throw new Error("A página inicial é obrigatória")
    }

    if (isNaN(tarefaE.inicial)) {
        throw new Error("A página inicial deve ser um número")
    }

    if (!tarefaE.final) {
        throw new Error("A página final é obrigatória")
    }

    if (isNaN(tarefaE.final)) {
        throw new Error("A página final deve ser um número")
    }

    if (!tarefaE.conteudo) {
        throw new Error("O conteúdo é obrigatório")
    }

    if (!tarefaE.data) {
        throw new Error("A data de entrega é obrigatória")
    }

    if (!tarefaE.sobre) {
        throw new Error("O campo sobre é obrigatório")
    }

}

export function ValidarEditarTarefaE(tarefaE, id) {

    if (!id) {
        throw new Error("O ID é obrigatório")
    }

    if (isNaN(id)) {
        throw new Error("O ID deve ser um número")
    }

    if (!tarefaE.materia) {
        throw new Error("A matéria é obrigatória")
    }

    if (!tarefaE.inicial) {
        throw new Error("A página inicial é obrigatória")
    }

    if (isNaN(tarefaE.inicial)) {
        throw new Error("A página inicial deve ser um número")
    }

    if (!tarefaE.final) {
        throw new Error("A página final é obrigatória")
    }

    if (isNaN(tarefaE.final)) {
        throw new Error("A página final deve ser um número")
    }

    if (!tarefaE.conteudo) {
        throw new Error("O conteúdo é obrigatório")
    }

    if (!tarefaE.data) {
        throw new Error("A data de entrega é obrigatória")
    }

    if (!tarefaE.sobre) {
        throw new Error("O campo sobre é obrigatório")
    }

}

export function ValidarExcluirTarefaE(id) {

    if (!id) {
        throw new Error("O ID é obrigatório")
    }

    if (isNaN(id)) {
        throw new Error("O ID deve ser um número")
    }


}