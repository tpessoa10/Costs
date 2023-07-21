import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';
import styles from './components/layout/Container.module.css'
 
function App() {
  return (
    <Router>
    <Navbar/>
      <Container customClass="minHeight">
        <Routes>
          <Route  exact path='/' element={<Home/>}></Route>
          <Route  path='/company' element={<Company/>}></Route>
          <Route  path='/contact' element={<Contact/>}></Route>
          <Route  path='/projects' element={<Projects/>}></Route>
          <Route  path='/newproject' element={<NewProject/>}></Route>
          <Route  path='/project/:id' element={<Project/>}></Route>
        </Routes>
        </Container>
        <Footer/>
    </Router>
  )
}

export default App;
