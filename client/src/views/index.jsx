import Certificados from "../components/Certificados"
import Contato from "../components/Contato"
import Formacao from "../components/Formacao"
import Inicio from "../components/Inicio"
import Quem from "../components/Quem"
import '../index.css'


function Port() {
    return (
        <div className="container row">
            <nav id="portif" className="navbar bg-body-tertiary px-3 mb-3">

                <ul className="nav nav-pills">
                    <button className="btn btn-outline-light">
                        <a className=" icon-link icon-link-hover link-danger link-underline-danger link-underline-opacity-25 text-danger" href="#id1">Inicio </a>
                        <i className="bi bi-arrow-down"></i>


                    </button>
                    <button className="btn btn-outline-light">
                        <a className="icon-link icon-link-hover link-danger link-underline-danger link-underline-opacity-25 text-danger " href="#id2">Quem é Maria Luiza?</a>
                        <i className="bi bi-arrow-down"></i>
                    </button>
                    <button className="btn btn-outline-light">
                        <a className=" icon-link icon-link-hover link-danger link-underline-danger link-underline-opacity-25 text-danger" href="#id3">Formação Academica</a>
                        <i className="bi bi-arrow-down"></i>
                    </button>
                    <button className="btn btn-outline-light">
                        <a className=" icon-link icon-link-hover link-danger link-underline-danger link-underline-opacity-25 text-danger" href="#id4">Certificados</a>
                        <i className="bi bi-arrow-down"></i>
                    </button>

                    <button className="btn btn-outline-light">
                        <a className=" icon-link icon-link-hover link-danger link-underline-danger link-underline-opacity-25 text-danger" href="#id5">Contato</a>
                        <i className="bi bi-arrow-down"></i>
                    </button>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#portif" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <div className="col" id="id1"><Inicio /></div>

                <div className="p-3"></div>
                <hr />


                <div className="col" id="id2"><p className="ui-btn"><span>Apresentação:</span></p><Quem /></div>
                <div className="p-3"></div>

 
    

                <div className="col" id="id3"><p className="ui-btn"><span>Formação Academica:</span></p><Formacao /></div>
                <div className="p-3"></div>
               
                <div className="col" id="id4"><p className="ui-btn"><span>Certificados:</span></p><Certificados /></div>
                <div className="p-3"></div>
             

                <div className="col" id="id5"><p className="ui-btn"><span>Contato:</span></p><Contato /></div>
                <div className="p-3"></div>
        


            </div>
        </div>
    )
}

export default Port
