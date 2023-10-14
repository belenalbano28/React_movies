import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";


function App() {
    const [listado, setListado] = useState([]);
  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>My Movies</h1>
        </header>
        <nav className="nav">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>

        <section id="content" className="content">
           <Listado listado={listado} setListado={setListado}></Listado>
        </section>

        <aside className="lateral">
            <Buscador listado={listado} setListado={setListado}></Buscador>
            <Crear setListado={setListado}></Crear>
        </aside>
        <footer className="footer">
            &copy Master React - Belen Albano
        </footer>

    </div>
  );
}

export default App;
