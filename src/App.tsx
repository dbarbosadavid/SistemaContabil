import './App.css'
import { BrowserRouter } from "react-router-dom";
import Body from './components/Body';
import Nav from './components/Nav';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Body />
      <footer style={{ left: 0, bottom: 0, width: "100%",marginTop: "2rem", padding: "1rem", textAlign: "center", boxShadow: "0 -2px 8px rgba(0,0,0,0.05)", position: "fixed"}}>
        <small>&copy; {new Date().getFullYear()} Sistema Contábil. Todos os direitos reservados.</small>
      </footer>
    </BrowserRouter>
  )
}

export default App
