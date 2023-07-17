import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/NewProject';
 
function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/company' element={<Company/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/newproject' element={<Newproject/>}></Route>
    </Routes>
    </Router>
  )
}

export default App;
