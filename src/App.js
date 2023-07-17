import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

import Container from './components/layout/Container';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';
 
function App() {
  return (
    <Router>
    <Navbar/>
      <Container className="minHeight">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path='/newproject' element={<NewProject/>}></Route>
        </Routes>
        </Container>
        <Footer/>
    </Router>
  )
}

export default App;
