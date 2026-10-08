export function ValidarCriarTarefaF(tarefaF) {

    if (!tarefaF.materia) {
        throw new Error("A matéria é obrigatória")
    }

    if (!tarefaF.inicial) {
        throw new Error("A página inicial é obrigatória")
    }

    if (isNaN(tarefaF.inicial)) {
        throw new Error("A página inicial deve ser um número")
    }

    if (!tarefaF.final) {
        throw new Error("A página final é obrigatória")
    }

    if (isNaN(tarefaF.final)) {
        throw new Error("A página final deve ser um número")
    }

    if (!tarefaF.conteudo) {
        throw new Error("O conteúdo é obrigatório")
    }

    if (!tarefaF.data) {
        throw new Error("A data de entrega é obrigatória")
    }

    if (!tarefaF.sobre) {
        throw new Error("O campo sobre é obrigatório")
    }

}

export function ValidarEditarTarefaF(tarefaF, id) {

    if (!id) {
        throw new Error("O ID é obrigatório")
    }

    if (isNaN(id)) {
        throw new Error("O ID deve ser um número")
    }

    if (!tarefaF.materia) {
        throw new Error("A matéria é obrigatória")
    }

    if (!tarefaF.inicial) {
        throw new Error("A página inicial é obrigatória")
    }

    if (isNaN(tarefaF.inicial)) {
        throw new Error("A página inicial deve ser um número")
    }

    if (!tarefaF.final) {
        throw new Error("A página final é obrigatória")
    }

    if (isNaN(tarefaF.final)) {
        throw new Error("A página final deve ser um número")
    }

    if (!tarefaF.conteudo) {
        throw new Error("O conteúdo é obrigatório")
    }

    if (!tarefaF.data) {
        throw new Error("A data de entrega é obrigatória")
    }

    if (!tarefaF.sobre) {
        throw new Error("O campo sobre é obrigatório")
    }


}

export function ValidarExcluirTarefaF(id) {

    if (!id) {
        throw new Error("O ID é obrigatório")
    }

    if (isNaN(id)) {
        throw new Error("O ID deve ser um número")
    }


}