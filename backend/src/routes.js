import escola from './controller/TarefasEscolaController.js';
import frei from './controller/TarefasFreiController.js';

export default function Rotas(api){
    api.use(escola);
    api.use(frei);
}