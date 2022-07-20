// import ColorStyles from '../../styles/colorStyles.css';
import './styleMain.css';

import Picanha from '../../assets/pratos/Picanha.png';
import Chamas from '../../assets/chamas-black.png';

function Main() {
  return (
    <div id="main">
    <div className="Main">
      <h3 className="nome">Sabores da Carne</h3>
      <img cassName="header-foto" src={Picanha} alt="picanha" />
      <h3 className="nos">Bem vindo ao <br></br>Sabores da Carne!</h3>
      <span className="texto-geral">Deliciosas Comidas, Carne no speto, Rodízio, a la carte....
      Comida de todo o Brasil, bem vindo a nossa Casa.</span>
      <img className="chamas" src={Chamas} alt="chamas" />
    </div>
    </div>
  );
}

export default Main;
