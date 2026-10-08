import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Index.jsx';
import Tarefas from './pages/Tarefas/App.jsx';

export default function Paginas(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Tarefas/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    );
}