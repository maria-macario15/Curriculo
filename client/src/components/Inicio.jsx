import '../index.css'
import perfil from '../perfil.jpg'
function Inicio() {
    return (
        <div className="col profile-photo ">
            <div className="card">
                <div className="card-info">
                    <div className="card-avatar"><img className='perfil' src={perfil} /></div>
                    <div className="card-title">Maria Luiza Macario</div>
                    <div className="card-subtitle">Software Developer</div>
                </div>
                <ul className="card-social">
                    <li className="card-social__item">
                        <a href='https://www.instagram.com/marialuiza.macario/' class="bi bi-instagram" ></a>
                    </li>

                    <li className="card-social__item">
                        <a href='https://www.linkedin.com/in/maria-luiza-macario-da-rocha-1989461b5/' className="bi bi-linkedin"></a>
                    </li>

                    <li className="card-social__item">
                        <a href='https://github.com/maria-macario15' className="bi bi-github"></a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Inicio