
import './App.scss'
import { useState, useEffect } from 'react'

export default function Tarefas() {
    const [materia, setMateria] = useState('')
    const [inicial, setInicial] = useState('')
    const [final, setFinal] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [data, setData] = useState('')
    const [sobre, setSobre] = useState('')

    const [licoes, setLicoes] = useState([])
    const [mensagem, setMensagem] = useState('')
    const [tipoMensagem, setTipoMensagem] = useState('')
    const [erroLista, setErroLista] = useState('')
    const [carregando, setCarregando] = useState(true)

    async function ListarLicoes() {
        try {
            setErroLista('')

            const resposta = await fetch(
                'http://localhost:2010/escola/listar'
            )

            const dados = await resposta.json()

            if (!resposta.ok) {
                throw new Error(
                    dados.erro || 'Erro ao listar as lições.'
                )
            }

            const lista = Array.isArray(dados)
                ? dados
                : dados.resposta || dados.licoes || []

            setLicoes(lista)

        } catch (erro) {
            setErroLista(
                erro.message || 'Não foi possível carregar as lições.'
            )
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        ListarLicoes()
    }, [])

    async function CriarLicao(e) {
        e.preventDefault()

        setMensagem('')
        setTipoMensagem('')

        try {
            const resposta = await fetch(
                'http://localhost:2010/escola/criar',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        materia: materia,
                        inicial: Number(inicial),
                        final: Number(final),
                        conteudo: conteudo,
                        data: data,
                        sobre: sobre
                    })
                }
            )

            const dados = await resposta.json()

            if (!resposta.ok) {
                setMensagem(
                    dados.erro || dados.mensagem || 'Erro ao criar lição.'
                )
                setTipoMensagem('erro')
                return
            }

            setMensagem('Lição criada com sucesso!')
            setTipoMensagem('sucesso')

            setMateria('')
            setInicial('')
            setFinal('')
            setConteudo('')
            setData('')
            setSobre('')

            await ListarLicoes()

        } catch (erro) {
            setMensagem('Não foi possível conectar com a API.')
            setTipoMensagem('erro')
            console.error(erro)
        }
    }

    function FormatarData(valor) {
        if (!valor) return 'Sem data'

        const dataFormatada = String(valor).slice(0, 10)

        const partes = dataFormatada.split('-')

        if (partes.length !== 3) return dataFormatada

        return `${partes[2]}/${partes[1]}/${partes[0]}`
    }

    return (
        <div className="container-tarefas">

            <div className="cadastro">
                <form onSubmit={CriarLicao}>
                    <h2>Criar Lição</h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Matéria"
                            value={materia}
                            onChange={(e) => setMateria(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Página Inicial"
                            value={inicial}
                            onChange={(e) => setInicial(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Página Final"
                            value={final}
                            onChange={(e) => setFinal(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Conteúdo"
                            value={conteudo}
                            onChange={(e) => setConteudo(e.target.value)}
                            required
                        />

                        <input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Descrição"
                            value={sobre}
                            onChange={(e) => setSobre(e.target.value)}
                            required
                        />

                        <button type="submit">Enviar</button>
                    </div>

                    {mensagem && (
                        <p className={`mensagem ${tipoMensagem}`}>
                            {mensagem}
                        </p>
                    )}
                </form>
            </div>

            <div className="lista-tarefas">
                <h2>Minhas Lições</h2>

                {carregando && (
                    <p>Carregando lições...</p>
                )}

                {!carregando && erroLista && (
                    <p className="mensagem erro">{erroLista}</p>
                )}

                {!carregando && !erroLista && licoes.length === 0 && (
                    <p>Nenhuma lição cadastrada.</p>
                )}

                <div className="tarefas">
                    {licoes.map((licao, index) => (
                        <div
                            className="card-licao"
                            key={licao.id_tarefa || licao.id || index}
                        >
                            <div className="cabecalho-licao">
                                <h2>{licao.materia}</h2>

                                <span>
                                    {FormatarData(
                                        licao.data || licao.data_entrega
                                    )}
                                </span>
                            </div>

                            <div className="paginas">
                                <p>
                                    Página inicial: {licao.inicial ?? '-'}
                                </p>

                                <p>
                                    Página final: {licao.final ?? '-'}
                                </p>
                            </div>

                            <div className="conteudo-licao">
                                <h3>
                                    Conteúdo: {licao.conteudo || '-'}
                                </h3>

                                <p>
                                    Desc: {licao.sobre || '-'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}