import './App.scss'

export default function Tarefas() {
  return (
    <>
    <div className="container-tarefas">
        <div className="cadastro">
          <form >
          <h2>Criar Lição</h2>
          <div>
            <input type="text" placeholder='Matéria' />
            <input type="text" placeholder='Página Inicial' />
            <input type="text" placeholder='Página Final' />
          </div>
          <div>
            <input type="conteudo" placeholder='Conteúdo' />
            <input type="date" placeholder='Data de entrega' />
          </div>
          <div>
            <input type="text" placeholder='Descrição' />
            <button type="submit">Enviar</button>
          </div>
          </form>
        </div>
        <div className="tarefas">

<div className="card-licao">
    <div className="cabecalho-licao">
        <h2>Matemática</h2>
        <span>12/10/2026</span>
    </div>

    <div className="paginas">
        <p>Página inicial: 10</p>
        <p>Página final: 25</p>
    </div>

    <div className="conteudo-licao">
        <h3>Conteúdo: teste</h3>
        <p>Desc: Estudar equações do segundo grau.</p>
    </div>
</div>

<div className="card-licao">
    <div className="cabecalho-licao">
        <h2>Matemática</h2>
        <span>12/10/2026</span>
    </div>

    <div className="paginas">
        <p>Página inicial: 10</p>
        <p>Página final: 25</p>
    </div>

    <div className="conteudo-licao">
        <h3>Conteúdo: teste</h3>
        <p>Desc: Estudar equações do segundo grau.</p>
    </div>
</div>

<div className="card-licao">
    <div className="cabecalho-licao">
        <h2>Matemática</h2>
        <span>12/10/2026</span>
    </div>

    <div className="paginas">
        <p>Página inicial: 10</p>
        <p>Página final: 25</p>
    </div>

    <div className="conteudo-licao">
        <h3>Conteúdo: teste</h3>
        <p>Desc: Estudar equações do segundo grau.</p>
    </div>
</div>
        </div>
      </div>
    </>
  )
}

